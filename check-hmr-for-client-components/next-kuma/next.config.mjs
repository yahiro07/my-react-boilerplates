/** @type {import('next').NextConfig} */
import { withKumaUI } from "@kuma-ui/next-plugin";

const nextConfig = {};

export default withKumaUI(nextConfig, { outputDir: "./.kuma" });
