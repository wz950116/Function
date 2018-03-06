'use strict';

// const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware');
// const noopServiceWorkerMiddleware = require('react-dev-utils/noopServiceWorkerMiddleware');
// const ignoredFiles = require('react-dev-utils/ignoredFiles');
// const config = require('./webpack.config.dev');
// const paths = require('./paths');

// const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
// const host = process.env.HOST || '0.0.0.0';

// module.exports = function(proxy, allowedHost) {
//     return {
//         disableHostCheck: !proxy || process.env.DANGEROUSLY_DISABLE_HOST_CHECK === 'true',
//         compress: true,
//         clientLogLevel: 'none',
//         contentBase: paths.appPublic,
//         watchContentBase: true,
//         hot: true,
//         publicPath: config.output.publicPath,
//         quiet: true,
//         watchOptions: {
//             ignored: ignoredFiles(paths.appSrc),
//         },
//         https: protocol === 'https',
//         host: host,
//         overlay: false,
//         historyApiFallback: {
//             disableDotRule: true,
//         },
//         public: allowedHost,
//         proxy,
//         before(app) {
//             app.use(errorOverlayMiddleware());
//             app.use(noopServiceWorkerMiddleware());
//         },
//     };
// };





// var webpack = require('webpack');
// var WebpackDevServer = require('webpack-dev-server');
// var config = require('./webpack.config');
// new WebpackDevServer(webpack(config), {
//     publicPath: config.output.publicPath,
//     hot: true,
//     historyApiFallback: true
// }).listen(3000, 'localhost', function(err, result) {
//     if (err) {
//         return console.log(err);
//     }
//     console.log('Listening at http://localhost:3000/')
// });