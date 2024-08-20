const config = {
  url: process.env.WEBSITE_URL || 'http://127.0.0.1:5001',
  host: process.env.WEBSITE_URL || 'http://127.0.0.1:3000',
  google: {
    id:
      process.env.GOOGLE_CLIENT_ID,
    secret:
      process.env.GOOGLE_CLIENT_SECRET,
    returnURL:
      process.env.GOOGLE_CLIENT_URL ||
      `http://127.0.0.1:5001/auth/google/callback`
  }
};

module.exports = config;
