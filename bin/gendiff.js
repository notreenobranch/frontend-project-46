#!/usr/bin/env node

import { Command } from 'commander';
import genDiff from '../index.js';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1', '-V, --version', 'output the version number')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .action(genDiff)
  .helpOption('-h, --help', 'output usage information');

program.parse();
