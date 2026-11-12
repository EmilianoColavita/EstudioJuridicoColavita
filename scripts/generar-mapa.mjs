// Genera src/lib/geo/argentina.ts a partir de Natural Earth (dominio público).
// Uso: descargar ne_10m_admin_1_states_provinces.geojson de github.com/nvkelso/natural-earth-vector (carpeta geojson)
//      y correr: node scripts/generar-mapa.mjs <admin1.geojson> src/lib/geo/argentina.ts
import fs from "node:fs";
const [entrada, salida] = process.argv.slice(2);
const g = JSON.parse(fs.readFileSync(entrada, "utf8"));

const LAT0 = -38;
const K = Math.cos((LAT0 * Math.PI) / 180);
const proj = ([lon, lat]) => [lon * K, -lat];

// Douglas-Peucker
function dp(pts, tol) {
  if (pts.length < 3) return pts;
  const [a, b] = [pts[0], pts[pts.length - 1]];
  let max = 0, idx = 0;
  const dx = b[0] - a[0], dy = b[1] - a[1];
  const len = Math.hypot(dx, dy) || 1e-9;
  for (let i = 1; i < pts.length - 1; i++) {
    const d = Math.abs(dy * pts[i][0] - dx * pts[i][1] + b[0] * a[1] - b[1] * a[0]) / len;
    if (d > max) { max = d; idx = i; }
  }
  if (max <= tol) return [a, b];
  return dp(pts.slice(0, idx + 1), tol).slice(0, -1).concat(dp(pts.slice(idx), tol));
}
// Anillo cerrado: se parte en el punto más lejano al inicio y se simplifica cada mitad
function dpAnillo(r, tol) {
  let far = 0, dmax = -1;
  for (let i = 1; i < r.length; i++) {
    const d = Math.hypot(r[i][0] - r[0][0], r[i][1] - r[0][1]);
    if (d > dmax) { dmax = d; far = i; }
  }
  return dp(r.slice(0, far + 1), tol).slice(0, -1).concat(dp(r.slice(far), tol));
}
const area = (r) => {
  let s = 0;
  for (let i = 0; i < r.length; i++) {
    const [x1, y1] = r[i], [x2, y2] = r[(i + 1) % r.length];
    s += x1 * y2 - x2 * y1;
  }
  return Math.abs(s / 2);
};

const feats = g.features.filter(
  (f) => f.properties.adm0_a3 === "ARG" || f.properties.adm0_a3 === "FLK",
);

// Bounding box en coordenadas proyectadas
let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
for (const f of feats) {
  const polys = f.geometry.type === "Polygon" ? [f.geometry.coordinates] : f.geometry.coordinates;
  for (const pl of polys) for (const p of pl[0]) {
    const [x, y] = proj(p);
    minX = Math.min(minX, x); maxX = Math.max(maxX, x);
    minY = Math.min(minY, y); maxY = Math.max(maxY, y);
  }
}
const ANCHO = 300;
const escala = ANCHO / (maxX - minX);
const ALTO = Math.ceil((maxY - minY) * escala);
const M = 6; // margen
const xy = (p) => {
  const [x, y] = proj(p);
  return [+((x - minX) * escala + M).toFixed(1), +((y - minY) * escala + M).toFixed(1)];
};

const TOL = 0.45; // en unidades del viewBox
const provincias = [];
for (const f of feats) {
  const esMalvinas = f.properties.adm0_a3 === "FLK";
  const nombre = esMalvinas ? "Islas Malvinas" : f.properties.name;
  const polys = f.geometry.type === "Polygon" ? [f.geometry.coordinates] : f.geometry.coordinates;
  let d = "";
  for (const pl of polys) {
    const anillo = pl[0].map(xy);
    if (area(anillo) < (esMalvinas ? 1.5 : 0.8) && nombre !== "Ciudad de Buenos Aires") continue;
    const s = nombre === "Ciudad de Buenos Aires" ? anillo : dpAnillo(anillo, TOL);
    if (s.length < 3) continue;
    d += "M" + s.map((p) => p.join(",")).join("L") + "Z";
  }
  provincias.push({ nombre, d });
}

// Pines: punto de etiqueta de cada provincia (Natural Earth), CABA en su centro. Sin pin en Malvinas.
const pines = [];
for (const f of feats) {
  if (f.properties.adm0_a3 !== "ARG") continue;
  const lon = f.properties.longitude, lat = f.properties.latitude;
  pines.push({ nombre: f.properties.name, xy: xy([lon, lat]) });
}
// La Plata: sede del estudio
const laPlata = xy([-57.95, -34.92]);
// Orden de aparición: desde La Plata hacia afuera
pines.sort(
  (a, b) => Math.hypot(a.xy[0] - laPlata[0], a.xy[1] - laPlata[1]) - Math.hypot(b.xy[0] - laPlata[0], b.xy[1] - laPlata[1]),
);

const out = `// ARCHIVO GENERADO: no editar a mano.
// Fuente: Natural Earth 1:10m admin-1 (dominio público, https://www.naturalearthdata.com/).
// Proyección equirectangular centrada en ${LAT0}°, bordes simplificados (Douglas-Peucker, tolerancia ${TOL}).

export const mapaViewBox = "0 0 ${ANCHO + 2 * M} ${ALTO + 2 * M}";

export const provincias: { nombre: string; d: string }[] = ${JSON.stringify(provincias, null, 2)};

/** Sede del estudio */
export const laPlata: [number, number] = ${JSON.stringify(laPlata)};

/** Un pin por provincia, ordenados de La Plata hacia afuera (orden de aparición al hacer scroll) */
export const pines: { nombre: string; xy: [number, number] }[] = ${JSON.stringify(pines, null, 2)};
`;
fs.writeFileSync(salida, out);
console.log("viewBox", ANCHO + 2 * M, ALTO + 2 * M, "bytes", out.length, "pines", pines.length);
