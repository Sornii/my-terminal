export function parseArgs(args) {
  const augmented = {};
  let lastArg = null;
  for (let index = 0; index < args.length; index++) {
    const currentArg = args[index];
    if (currentArg.startsWith('-')) {
      const argName = currentArg.replace(/-+/, '');
      augmented[argName] = true;
      lastArg = argName;
    } else {
      if (augmented[lastArg] === true) {
        augmented[lastArg] = currentArg;
      } else {
        const currentValue = augmented[lastArg];
        if (Array.isArray(currentValue)) {
          augmented[lastArg] = [...currentValue, currentArg];
        } else {
          augmented[lastArg] = [currentValue, currentArg];
        }
      }
    }
  }
  return augmented;
}
