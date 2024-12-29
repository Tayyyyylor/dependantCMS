
export default ({ env }: { env: (key: string, defaultValue?: string) => string })  => ({
    upload: {
        config: {
            provider: 'aws-s3',
            rootPath: "",
            providerOptions: {
                s3Options: {
                    baseUrl: env('CDN_URL'),
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
                upload: {},
                  uploadStream: {},
                delete: {},
            },
        },
    },
});


