const config = {
  // url: process.env.WEBSITE_URL || 'https://www.gdpc.io/server',
  // host: process.env.WEBSITE_URL || 'https://www.gdpc.io',
  // google: {
  //   id:
  //     process.env.GOOGLE_CLIENT_ID ||
  //     '492566797996-u79o2ot8l075q2u2hteu4g1ipm3hec5v.apps.googleusercontent.com',
  //   secret:
  //     process.env.GOOGLE_CLIENT_SECRET || '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',
  //   returnURL:
  //     process.env.GOOGLE_CLIENT_URL ||
  //     `https://www.gdpc.io/server/auth/google/callback`
  // }
  url: process.env.WEBSITE_URL || 'http://127.0.0.1:5001',
  host: process.env.WEBSITE_URL || 'http://127.0.0.1:3000',
  google: {
    id:
      process.env.GOOGLE_CLIENT_ID ||
      '492566797996-975nn8dp3cfs1aa1p79mqi9ic0ksi2cb.apps.googleusercontent.com',
    secret:
      process.env.GOOGLE_CLIENT_SECRET || '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',
    returnURL:
      process.env.GOOGLE_CLIENT_URL ||
      `http://127.0.0.1:5001/auth/google/callback`
  }
};

module.exports = config;
