module.exports = {
  webpack: (config) => {
    config.mode = 'development';
    config.optimization.minimize = false;
    return config;
  },
};
