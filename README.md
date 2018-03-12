# Neutrino Tape Preset
[![NPM version][npm-image]][npm-url] [![NPM downloads][npm-downloads]][npm-url]

`neutrino-preset-tape` is a Neutrino preset that supports testing JavaScript projects with tape.

It is based on `neutrino-preset-mocha`.

## Features

- Zero upfront configuration necessary to start testing
- Babel compilation that compiles your tests using the same Babel options used by your source code
- Easily extensible to customize your testing as needed

## Requirements

- Node.js v6.9+
- Yarn or npm client
- Neutrino v5, Neutrino build preset

## Installation

`neutrino-preset-tape` can be installed via the Yarn or npm clients. Inside your project, make sure
`neutrino` and `neutrino-preset-tape` are development dependencies. You will also be using
another Neutrino preset for building your application source code.

#### Yarn

```bash
❯ yarn add --dev neutrino-preset-tape
```

#### npm

```bash
❯ npm install --save-dev neutrino-preset-tape
```

## Project Layout

`neutrino-preset-tape` follows the standard [project layout](https://neutrino.js.org/project-layout) specified by Neutrino. This means that by default all project test code should live in a directory named `test` in the root of the
project. Test files end in `_test.js` or `.test.js` by default.

## Quickstart

After adding the Tape preset to your Neutrino-built project, add a new directory named `test` in the root of the
project, with a single JS file named `simple_test.js` in it.

```bash
❯ mkdir test && touch test/simple_test.js
```

Edit your `test/simple_test.js` file with the following:

```js
import test from 'tape';

test('should be sane', t => {
  t.equal(true, !false);
  t.end();
});
```

Now edit your project's package.json to add commands for testing your application. In this example,
let's pretend this is a Node.js project:

```json
{
  "scripts": {
    "test": "neutrino test --use neutrino-preset-node neutrino-preset-tape"
  }
}
```

Or if you have set up Neutrino with `neutrino.use` in your package.json:

```json
{
  "neutrino": {
    "use": [
      "neutrino-preset-node",
      "neutrino-preset-tape"
    ]
  }
}
```

Run the tests, and view the results in your console:

#### Yarn

```bash
❯ yarn test
TAP version 13
# should be sane
ok 1 should be equal

1..1
# tests 1
# pass  1

# ok

Done in 2.18s.
```

#### npm

```bash
❯ npm test
TAP version 13
# should be sane
ok 1 should be equal

1..1
# tests 1
# pass  1

# ok

Done in 2.18s.
```

To run tests against files from your source code, simply import them:

```js
import thingToTest from '../src/thing';
```

For more details on specific tape usage, please refer to their [documentation](https://www.npmjs.com/package/tape).

## Executing single tests

By default this preset will execute every test file located in your test directory ending in `_test.js`.
Use the command line [`files` parameters](https://neutrino.js.org/cli#neutrino-test) to execute individual tests.

## Customizing

To override the test configuration, start with the documentation on [customization](https://neutrino.js.org/customization).
`neutrino-preset-tape` creates some conventions to make overriding the configuration easier once you are ready to make
changes.

### Rules

The following is a list of rules and their identifiers which can be overridden:

- `compile`: Compiles JS files from the `test` directory using Babel. Contains a single loader named `babel`. Adopts
Babel configuration from other presets that have been loaded.

### Simple customization

By following the [customization guide](https://neutrino.js.org/customization/simple) you can override and augment the test configuration
directly from package.json. `neutrino-preset-tape` will import Tape configuration from your package.json's
`neutrino.options.tape` object if defined.


## Contributing

This preset is can be found in the repo [https://github.com/allain/neutrino-preset-tape](https://github.com/allain/neutrino-preset-tape) repository.

[npm-image]: https://img.shields.io/npm/v/neutrino-preset-tape.svg
[npm-downloads]: https://img.shields.io/npm/dt/neutrino-preset-tape.svg
[npm-url]: https://npmjs.org/package/neutrino-preset-tape
