const path = require('path');

const { override, addWebpackAlias } = require('customize-cra');

module.exports = override(
  addWebpackAlias({
    '@app': path.resolve(__dirname, 'src'),
  }),
);

// module.exports = function override(config) {
//   config.resolve = {
//     ...config.resolve,
//     alias: {
//       '@app': path.resolve(__dirname, 'src'),
//     },
//   };

//   return config;
// };
