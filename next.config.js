module.exports = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "static.datasquirel.com",
                port: "",
                pathname: "/images/**",
            },
        ],
    },
};
