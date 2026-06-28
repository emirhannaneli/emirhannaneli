import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a minimal self-contained server build for Docker (see Dockerfile).
  output: "standalone",
};

export default nextConfig;
