import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

export default defineConfig({
  plugins: [react()],
  resolve: {
    // mirror the tsconfig "@/*" -> project root alias so tests resolve config imports
    alias: { "@": fileURLToPath(new URL(".", import.meta.url)) },
  },
  test: { environment: "node" },
});
