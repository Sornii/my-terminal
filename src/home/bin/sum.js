export function sum(args) {
  if (!Array.isArray(args) || args.length !== 2) {
    throw new Error('It needs two arguments');
  }
  const [a, b] = args;
  if (isNaN(a) || isNaN(b)) {
    throw new Error('It must be numbers');
  }
  return Number(a) + Number(b);
}

export default {
  sum: sum,
};
