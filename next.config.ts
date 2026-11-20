import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build autocontenido para el Dockerfile de Dokploy
  output: "standalone",
  images: {
    // 75 es el default; 90 para fotos de fondo grandes (cielo y degradés oscuros se ven con bloques a 75)
    qualities: [75, 90],
  },
  // Mockup en Vercel (process.env.VERCEL = "1"): que Google no lo indexe,
  // para que no compita con el dominio real cuando salga en Dokploy.
  async headers() {
    if (process.env.VERCEL !== "1") return [];
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
  cacheComponents: true,
  partialPrefetching: true,
  experimental: {
    agentUpgrade: "security",
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
