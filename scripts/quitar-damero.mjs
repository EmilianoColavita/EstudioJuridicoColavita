// Quita un fondo "damero" (gris/blanco pintado en la imagen) y deja un PNG con transparencia real.
// Uso: node scripts/quitar-damero.mjs <ruta-al-paquete-sharp> <entrada> <salida.png> <preview.png>
// (Gemini a veces "dibuja" el damero de transparencia en vez de exportar alfa real.)
import { createRequire } from "node:module";
const [rutaSharp, entrada, salida, preview] = process.argv.slice(2);
const sharp = createRequire(import.meta.url)(rutaSharp);

const { data, info } = await sharp(entrada)
  .removeAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });
const { width: W, height: H } = info;
const N = W * H;

// 1) Candidato a fondo: gris neutro y claro (el damero es 197 y 255, con ruido de JPEG)
const cand = new Uint8Array(N);
for (let i = 0; i < N; i++) {
  const r = data[i * 3], g = data[i * 3 + 1], b = data[i * 3 + 2];
  const sat = Math.max(r, g, b) - Math.min(r, g, b);
  const lum = (r + g + b) / 3;
  cand[i] = sat <= 18 && lum >= 165 ? 1 : 0;
}

// 2) Fondo = candidatos conectados con el borde (así no se borra la camisa clara encerrada por el saco)
const fondo = new Uint8Array(N);
const pila = [];
const empujar = (i) => {
  if (cand[i] && !fondo[i]) {
    fondo[i] = 1;
    pila.push(i);
  }
};
for (let x = 0; x < W; x++) {
  empujar(x);
  empujar((H - 1) * W + x);
}
for (let y = 0; y < H; y++) {
  empujar(y * W);
  empujar(y * W + W - 1);
}
while (pila.length) {
  const i = pila.pop();
  const x = i % W, y = (i / W) | 0;
  if (x > 0) empujar(i - 1);
  if (x < W - 1) empujar(i + 1);
  if (y > 0) empujar(i - W);
  if (y < H - 1) empujar(i + W);
}

// 3) Alfa: 0 en el fondo; erosión de 1 px del borde de la figura para sacar el halo claro del JPEG
let alfa = new Uint8Array(N);
for (let i = 0; i < N; i++) alfa[i] = fondo[i] ? 0 : 255;
const erosion = new Uint8Array(alfa);
for (let y = 1; y < H - 1; y++)
  for (let x = 1; x < W - 1; x++) {
    const i = y * W + x;
    if (alfa[i] && (!alfa[i - 1] || !alfa[i + 1] || !alfa[i - W] || !alfa[i + W]))
      erosion[i] = 0;
  }
alfa = erosion;

// 4) Recorte al contorno de la figura + margen
let x0 = W, y0 = H, x1 = 0, y1 = 0;
for (let y = 0; y < H; y++)
  for (let x = 0; x < W; x++)
    if (alfa[y * W + x]) {
      if (x < x0) x0 = x;
      if (x > x1) x1 = x;
      if (y < y0) y0 = y;
      if (y > y1) y1 = y;
    }
const m = 8;
x0 = Math.max(0, x0 - m); y0 = Math.max(0, y0 - m); x1 = Math.min(W - 1, x1 + m);
const ancho = x1 - x0 + 1, alto = H - y0;

// Alfa suavizado 1px para bordes limpios
const alfaSuave = await sharp(Buffer.from(alfa), { raw: { width: W, height: H, channels: 1 } })
  .blur(0.8)
  .extractChannel(0)
  .raw()
  .toBuffer();

const rgba = Buffer.alloc(N * 4);
for (let i = 0; i < N; i++) {
  rgba[i * 4] = data[i * 3];
  rgba[i * 4 + 1] = data[i * 3 + 1];
  rgba[i * 4 + 2] = data[i * 3 + 2];
  rgba[i * 4 + 3] = alfaSuave[i];
}
const recorte = sharp(rgba, { raw: { width: W, height: H, channels: 4 } }).extract({
  left: x0, top: y0, width: ancho, height: alto,
});
const png = await recorte.png({ compressionLevel: 9 }).toBuffer();
await sharp(png).resize({ height: Math.min(alto, 1600) }).png({ compressionLevel: 9 }).toFile(salida);
await sharp(png).resize({ height: 800 }).flatten({ background: "#1a1d2e" }).toFile(preview);
console.log("recorte", ancho, alto, "desde", x0, y0);
