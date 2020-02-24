import { parseArgs } from '../../shared/args-parser';

const version = '0.0.1';

const help = `
Usage: help [options]

-h, --help          This menu
-v, --version       Program version
-n, --name <name>   Person name
-g, --greet <greet> Greeting

`;

export function hello(args) {
  const parsed = parseArgs(args);

  if (parsed.v || parsed.version) {
    return version;
  }

  if (parsed.h || parsed.help) {
    return help;
  }

  const name = (parsed.n || parsed.name) ?? 'Unnamed';
  const greet = (parsed.g || parsed.greet) ?? 'Hello';

  return `${greet}, ${name}.`;
}

export default {
  hello: hello,
};
