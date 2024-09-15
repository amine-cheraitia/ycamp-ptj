import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Répertoire de sortie de la construction
  },
  server: {
    open: true, // Ouvre automatiquement le navigateur lors du démarrage du serveur de dev
  },
});
