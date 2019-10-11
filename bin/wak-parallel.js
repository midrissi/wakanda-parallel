#!/usr/bin/env node

const { resolve } = require('path');
const { promisify } = require('util');
const { exists } = require('fs');
const Ajv = require('ajv');
const program = require('commander');
const pkg = require('../package.json');
const schema = require('../schemas/config.json');

program.version(pkg.version, '-v, --version', 'output the current version');

program
  .option('-c, --config <path>', 'specify configuration file');

program.parse(process.argv);

if (program.config) {
  const ajv = new Ajv();
  const validate = ajv.compile(schema);
  const exists$ = promisify(exists);

  (async () => {
    const path = resolve(program.config);
    const isExist = await exists$(path);
    if (!isExist) {
      console.error('Config file does not exist');
      return false;
    }

    // eslint-disable-next-line
    const json = require(path);

    if (!validate(json)) {
      console.error('Config file is not valid', validate.errors);
      return false;
    }

    return true;
  })();
}
