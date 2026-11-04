import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build autocontenido para el Dockerfile de Dokploy
  output: "standalone",
  images: {
    // 75 es el default; 90 para fotos de fondo grandes (cielo y degradés oscuros se ven con bloques a 75)
    qualities: [75, 90],
  },
  cacheComponents: true,
  partialPrefetching: true,
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
