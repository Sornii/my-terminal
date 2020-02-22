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

export function programNotFound() {
  return { type: PROGRAM_NOT_FOUND };
}

export function resurrectLastCommandBackwards() {
  return { type: RESURRECT_LAST_COMMAND_BACKWARDS };
}
export function resurrectLastCommandForward() {
  return { type: RESURRECT_LAST_COMMAND_FORWARDS };
}
