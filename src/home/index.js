import helloExecutables from '../home/bin/hello';
import sumExecutables from '../home/bin/sum';
import helpExecutables from '../home/bin/help';
import echoExecutables from '../home/bin/echo';
import fibExecutables from '../home/bin/fib';
import infoExecutables from '../home/bin/info';

export const executables = {
  ...helloExecutables,
  ...sumExecutables,
  ...helpExecutables,
  ...echoExecutables,
  ...fibExecutables,
  ...infoExecutables,
};
