module.exports = {
  apps: [
    {
      name: 'vollmed-api',
      script: 'pnpm run start',
      cwd: './server',
      env: {
        NODE_ENV: 'development',
        PORT: 8080
      }
    },
    {
      name: 'vollmed-web',
      script: 'pnpm run start',
      cwd: './web',
      env: {
        NODE_ENV: 'development'
      }
    }
  ]
};
