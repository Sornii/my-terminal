import {
  TOGGLE_CURSOR_COLOR,
  ADD_CHARACTER,
  DELETE_CHARACTER,
  SUBMIT,
  CLEAN_CHARACTERS,
  MOVE_CURSOR_RIGHT,
  MOVE_CURSOR_LEFT,
  PROGRAM_NOT_FOUND,
  RESURRECT_LAST_COMMAND_BACKWARDS,
  RESURRECT_LAST_COMMAND_FORWARDS,
  EXECUTE_PROGRAM,
  ADD_TO_OUTPUT,
} from '../constants/action-types';

export function toggleCursorColor() {
  return { type: TOGGLE_CURSOR_COLOR };
}

export function addCharacter(character) {
  return { type: ADD_CHARACTER, payload: character };
}

export function deleteCharacter() {
  return { type: DELETE_CHARACTER };
}

export function cleanCharacters() {
  return { type: CLEAN_CHARACTERS };
}

export function submitPrompt() {
  return { type: SUBMIT };
}

export function moveCursorRight() {
  return { type: MOVE_CURSOR_RIGHT };
}

export function moveCursorLeft() {
  return { type: MOVE_CURSOR_LEFT };
}

export function programNotFound(programName) {
  return { type: PROGRAM_NOT_FOUND, payload: programName };
}

export function resurrectLastCommandBackwards() {
  return { type: RESURRECT_LAST_COMMAND_BACKWARDS };
}
export function resurrectLastCommandForward() {
  return { type: RESURRECT_LAST_COMMAND_FORWARDS };
}

export function executeProgram(executable, args) {
  return { type: EXECUTE_PROGRAM, payload: { executable, args } };
}

export function addToOutput(output) {
  return { type: ADD_TO_OUTPUT, payload: output };
}
