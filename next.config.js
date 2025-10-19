/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed `output: 'export'` so dynamic server rendering is available.
  // If you need a fully static export for deployment, keep `output: 'export'`
  // and we can convert auth to a client-side gate (less secure).
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig