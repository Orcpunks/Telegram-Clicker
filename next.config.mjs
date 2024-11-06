/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    // Nastavenie výstupného adresára na .next
    distDir: 'build',
};

export default nextConfig;
