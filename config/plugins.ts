export default ({ env }: { env: (key: string, defaultValue?: string) => string }) => ({
    upload: {
        config: {
            provider: 'aws-s3',
            providerOptions: {
                baseUrl: env('CDN_URL'),
                s3Options: {
                    credentials: {
                        accessKeyId: env('AWS_KEY_ID'),
                        secretAccessKey: env('AWS_SECRET'),
                    },
                    region: env('AWS_REGION'),
                    params: {
                        Bucket: env('AWS_BUCKET'),
                    },
                },
                customDomain: env('CDN_URL'),
            },
            actionOptions: {
                upload: {
                    allowedTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'], 
                },
                uploadStream: {
                    allowedTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
                },
                delete: {},
            },
        },
    },
    'mux-video-uploader': { 
        enabled: true,
        config: {
            accessTokenId: env('MUX_ACCESS_TOKEN_ID'),
            secretKey: env('MUX_SECRET_KEY'),
        },
    },
});
