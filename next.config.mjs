/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: this site has no API routes or server actions, so a
  // plain static export is the simplest and most reliable way to deploy to
  // Cloudflare Pages — no @cloudflare/next-on-pages adapter, no Workers
  // runtime compatibility to worry about. `next build` now produces a
  // static `out/` directory Cloudflare Pages can serve directly.
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
