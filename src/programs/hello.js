import { print } from './output';

export function hello(...args) {
  print('Hello World!');
}

export default {
  hello: hello,
};
