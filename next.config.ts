import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 90 pour la scène des agents : à 75, le grain du fond nuit dessine un rectangle autour du dessin.
    qualities: [75, 90],
  },
};

export default nextConfig;
