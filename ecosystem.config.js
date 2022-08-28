module.exports = {
  script: 'serve',
  env: {
    PM2_SERVE_PATH: './dist',
    PM2_SERVE_PORT: 8080
  }
};
