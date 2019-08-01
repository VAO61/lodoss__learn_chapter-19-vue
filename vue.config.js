module.exports = {
  chainWebpack: config => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule.use('vue-svg-loader').loader('vue-svg-loader');
  }
};

/**
 * For bgi(svg)
 * (hemorrhoids)
 */

// module.exports = {
//   chainWebpack: config => {
//     const svgRule = config.module.rule('svg');

//     svgRule.uses.clear();

//     svgRule
//       .oneOf('inline')
//       .resourceQuery(/inline/)
//       .use('vue-svg-loader')
//       .loader('vue-svg-loader')
//       .end()
//       .end()
//       .oneOf('external')
//       .use('file-loader')
//       .loader('file-loader')
//       .options({
//         name: 'assets/[name].[hash:8].[ext]'
//       });
//   }
// };
