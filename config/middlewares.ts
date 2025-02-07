export default ({env}) => [
  'strapi::logger',
  'strapi::errors',
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:", 'https://dependant.tv', 'https://www.dependant.tv'],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            `https://${env("AWS_BUCKET")}.s3.${env(
              "AWS_REGION"
            )}.amazonaws.com`,
            env("CDN_URL"),
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            `https://${env("AWS_BUCKET")}.s3.${env(
              "AWS_REGION"
            )}.amazonaws.com`,
            env("CDN_URL"),
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: [
        'https://dependant.tv',
        'https://www.dependant.tv'
      ],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  {
    name: "strapi::body",
    config: {
      jsonLimit: "1gb",
      formLimit: "1gb",
      textLimit: "1gb",
      formidable: {
        maxFileSize: 1024 * 1024 * 1024, // 1GB en octets
      },
    },
  },
  
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
