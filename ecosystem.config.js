module.exports = {
  apps: [
    {
      name: 'blog-client',
      max_memory_restart: '1G',
      script: 'node server/index.js',
      instances: 1,
      cron_restart: '0 0 * * *',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
};
