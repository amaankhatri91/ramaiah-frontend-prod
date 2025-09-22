/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
      },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'e8f4a6d7c916.ngrok-free.app',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'bc1d9cf21ea9.ngrok-free.app',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
