import pages from "@hono/vite-cloudflare-pages";
import devServer from "@hono/vite-dev-server";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  if (mode === "client") {
    return {
      build: {
        rollupOptions: {
          input: ["./src/client.tsx", "./src/app.css"],
          output: {
            entryFileNames: "static/client.js",
            assetFileNames: "static/assets/[name].[ext]",
          },
        },
      },
    };
  } else {
    return {
      ssr: {
        external: ["react", "react-dom"],
      },
      plugins: [
        pages(),
        devServer({
          entry: "src/index.tsx",
        }),
      ],
    };
  }
});
