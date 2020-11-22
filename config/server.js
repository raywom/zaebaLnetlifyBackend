module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://localhost:1337',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '92ca6efa8d1e293875059e6e98d39c6f'),
    },
  },
});
