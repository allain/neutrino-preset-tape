const spawn = require('child_process').spawn;
const toParam = require('change-case').paramCase;
const glob = require('glob')

let proc;

module.exports = (tapeOpts = {}, babelOpts = {}, files = []) => new Promise((resolve) => {
  if (proc) {
    proc.kill();
  }

  if (!files.length) {
    files = glob.sync('test/**/*+(_test|.test).js')
  }

  process.env.NEUTRINO_BABEL_CONFIG = JSON.stringify(babelOpts);

  const argv = Object
    .keys(tapeOpts)
    .reduce((argv, key) => {
      const value = tapeOpts[key];

      return value === true ?
        [...argv, `--${toParam(key)}`] :
        [...argv, `--${toParam(key)}`, value];
    }, ['-r', require.resolve('./register.js')]);

  proc = spawn(require.resolve('tape/bin/tape'), [...argv, ...files], {
    cwd: process.cwd(),
    env: process.env,
    stdio: 'inherit'
  });

  proc.on('close', resolve);
});
