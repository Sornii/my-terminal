import { parseArgs } from '../../shared/args-parser';

const version = '0.2.0';

const help = `
Usage: sum [options] [numbers]

Options:
-h, --help    This menu
-v, --version Program version

`;

export function sum(args) {
  const parsed = parseArgs(args);
  if (parsed.v || parsed.version) {
    return version;
  }
  if (parsed.h || parsed.help) {
    return help;
  }

  if (!Array.isArray(args)) {
    throw new Error('Unknown error');
  }
  if (args.some(isNaN)) {
    throw new Error('Must be numbers');
  }
  return args.reduce((acc, curr) => acc + Number(curr), 0);
}

export default {
  sum: sum,
};
