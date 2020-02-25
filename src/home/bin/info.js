import { parseArgs } from '../../shared/args-parser';

const version = '0.1.0';

const help = `
Usage: info [options]

Options:
-h, --help     This menu
-v, --version  Program version
-e, --email    My email
-p, --phone    My phone number
-g, --github   My Github
-l, --linkedin My LinkedIn
-a, --all      All info

`;

const email = 'igor193@gmail.com';
const github = 'https://github.com/Sornii';
const linkedin = 'https://www.linkedin.com/in/igor-fontana/';
const phone = '+55 (48) 9 9970-7844';

const all = `
${email}
${phone}
${github}
${linkedin}

`;

export function info(args) {
  const parsed = parseArgs(args);
  if (parsed.v || parsed.version) {
    return version;
  }
  if (parsed.h || parsed.help) {
    return help;
  }
  if (parsed.a || parsed.all) {
    return all;
  }
  let contact = [];
  if (parsed.e || parsed.email) {
    contact = [...contact, email];
  }
  if (parsed.p || parsed.phone) {
    contact = [...contact, phone];
  }
  if (parsed.g || parsed.github) {
    contact = [...contact, github];
  }
  if (parsed.l || parsed.linkedin) {
    contact = [...contact, linkedin];
  }
  return contact.join('\r\n');
}

export default {
  info: info,
};
