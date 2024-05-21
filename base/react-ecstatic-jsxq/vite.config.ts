import { ecsstatic } from "@acab/ecsstatic/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react({ jsxImportSource: "jsxq" }), ecsstatic()],
});
