const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#F7931A', '@secondary-color': '#4D4D4D' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};