const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
                '@modal-header-bg': '#8A80D3',
                '@modal-heading-color': '#FFFFFF',
                '@primary-color': '#8A80D3',
                '@border-color-base' : '#000000',
                '@layout-footer-padding': '0px'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};