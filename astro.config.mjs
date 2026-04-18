import { defineConfig } from "astro/config";
import tailwind from "@tailwindcss/vite";

export default defineConfig({
  site: "https://z3r0d4yzz.github.io",
  base: "/soap-shop/",
  vite: {
    plugins: [tailwind()],
  },
});