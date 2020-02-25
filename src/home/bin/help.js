import { parseArgs } from '../../shared/args-parser';
import { executables } from '../index';

const version = `0.2.0`;

const helpText = `
Welcome,

This is terminal that will give you
some information about me.

There are some easter eggs too, cya!

`;

const helpInception = `
Usage: help [options]

Options:
-h, --help     This inception
-v, --version  Program version
-p, --programs List all programs "available"

`;

function help(args) {
  const parsed = parseArgs(args);

  if (parsed.v || parsed.version) {
    return version;
  }

  if (parsed.h || parsed.help) {
    return helpInception;
  }

  if (parsed.p || parsed.programs) {
    return Object.keys(executables)
      .filter(x => {
        return x !== 'sum' && x !== 'echo';
      })
      .join(' ');
  }

  return helpText;
}

export default {
  help: help,
};
