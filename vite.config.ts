import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import tailwindcss from "@tailwindcss/vite";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  plugins: [solid(), tailwindcss(), imagetools()],
});
