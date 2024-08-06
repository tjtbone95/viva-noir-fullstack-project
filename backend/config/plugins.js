// ~/strapi-aws-s3/backend/config/plugins.js
module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        s3Options: {
          accessKeyId: env('AWS_ACCESS_KEY_ID'),
          secretAccessKey: env('AWS_ACCESS_SECRET'),
          region: env('AWS_REGION'),
        },
        params: {
          ACL: env('AWS_ACL', 'public-read'),
          Bucket: env('AWS_BUCKET'),
          signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 15 * 60),
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
