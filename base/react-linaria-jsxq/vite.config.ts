import wyw from "@wyw-in-js/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    wyw({
      include: ["src/**/*.{ts,tsx}"],
      babelOptions: {
        presets: ["@babel/preset-typescript", "@babel/preset-react"],
      },
    }),
  ],
});
