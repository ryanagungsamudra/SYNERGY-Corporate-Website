const nextConfig = {
  images: {
    domains: ["127.0.0.1", "source.unsplash.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "127.0.0.1",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        port: "",
        pathname: "/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;
