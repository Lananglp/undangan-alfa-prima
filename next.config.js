module.exports = {
    async headers() {
        return [
            {
                source: '/:all*(png|jpg|ico)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=0, must-revalidate',
                    },
                ],
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dev.alfaprima.id',
                port: '',
                // pathname: '/assets/img/logo/AP-W.png',
            },
            {
                protocol: 'https',
                hostname: 'www.alfaprima.id',
                port: '',
                // pathname: '/assets/img/logo/AP-W.png',
            },
            {
                protocol: 'https',
                hostname: 'daftar.alfaprima.id',
                port: '',
                // pathname: '/assets/img/logo/AP-W.png',
            },
        ],
    },
}