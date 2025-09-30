/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
        NEXT_PUBLIC_IMAGE_URL: process.env.NEXT_PUBLIC_IMAGE_URL,
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
                hostname: 'claud-chubbier-tonelessly.ngrok-free.dev',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
