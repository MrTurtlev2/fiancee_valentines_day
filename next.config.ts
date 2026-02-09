import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/fiancee_valentines_day',
    assetPrefix: '/fiancee_valentines_day',
};

export default nextConfig;
