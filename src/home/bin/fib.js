import { parseArgs } from '../../shared/args-parser';

const version = '0.1.0';

const help = `
Usage: fib [options] [number]

Options:
-h, --help  This menu
-v, --version Program version

`;

export function fib(args) {
  const parsed = parseArgs(args);
  if (parsed.v || parsed.version) {
    return version;
  }
  if (parsed.h || parsed.help) {
    return help;
  }

  let num = parsed[null][0];

  let a = 1,
    b = 0,
    temp;

  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}

export default {
  fib: fib,
};
