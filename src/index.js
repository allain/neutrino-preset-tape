const tape = require('./tape');
const merge = require('deepmerge');
const loaderMerge = require('neutrino-middleware-loader-merge');

module.exports = (neutrino) => {
  neutrino.on('test', ({ files }) => {
    neutrino.use(loaderMerge('compile', 'babel'), {
      env: {
        test: {
          plugins: [require.resolve('babel-plugin-transform-es2015-modules-commonjs')]
        }
      }
    });

    return tape(
      neutrino.options.tape || {},
      neutrino.config.module.rule('compile').use('babel').get('options'),
      files
    );
  });
};
