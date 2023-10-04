/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // loader: "cloudinary",
    // reactStrictMode: true,
    domains: ["res.cloudinary.com"],
    // path: "https://res.cloudinary.com/<cloudinary-id>/image/upload",
  },
};

module.exports = nextConfig;
