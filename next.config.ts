import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages:['pino','pino-pretty'],
  reactCompiler: true,
  experimental: {
    turbopackFileSystemCacheForDev: true
  },
  images:{
    remotePatterns:[{
      protocol:"https",
      hostname: "st2.depositphotos.com",
      port:"",

    }]
  }

};

export default nextConfig;
