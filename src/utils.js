export function isValidKey(keyboardEvent) {
  const { ctrlKey, shiftKey, altKey, metaKey } = keyboardEvent;
  return !ctrlKey && !shiftKey && !altKey && !metaKey;
}

export function isEnter(keyboardEvent) {
  return keyboardEvent.key === 'Enter';
}

export function isBackspace(keyboardEvent) {
  return keyboardEvent.key === 'Backspace';
}

export function isArrowRight(keyboardEvent) {
  return keyboardEvent.key === 'ArrowRight';
}

export function isArrowLeft(keyboardEvent) {
  return keyboardEvent.key === 'ArrowLeft';
}

export function isArrowUp(keyboardEvent) {
  return keyboardEvent.key === 'ArrowUp';
}

export function isArrowDown(keyboardEvent) {
  return keyboardEvent.key === 'ArrowDown';
}

export function addAt(text, position, character) {
  return (
    text.slice(0, position) + character + text.slice(position, text.length)
  );
}

export function removeAt(text, position) {
  const sanitizedPosition = position - 1 < 0 ? 0 : position - 1;

  return text.slice(0, sanitizedPosition) + text.slice(position, text.length);
}

export function removeOneKeepSigned(number) {
  return number > 0 ? number - 1 : 0;
}
