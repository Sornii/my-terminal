import {
  TOGGLE_CURSOR_COLOR,
  ADD_CHARACTER,
  DELETE_CHARACTER,
  CLEAN_CHARACTERS,
  MOVE_CURSOR_RIGHT,
  MOVE_CURSOR_LEFT,
  SUBMIT,
  RESURRECT_LAST_COMMAND_BACKWARDS,
  RESURRECT_LAST_COMMAND_FORWARDS,
  CLEAR_HISTORY,
  ADD_TO_OUTPUT,
  PROGRAM_NOT_FOUND,
} from '../constants/action-types';
import { addAt, removeAt, removeOneKeepSigned } from '../utils';

const terminal = (
  state = {
    input: 'hello --help',
    position: 0,
    cursor: 'rgba(255, 255, 255, 0.2)',
    submitted: [],
    resurrectPosition: -1,
    output: [],
    dir: '/',
  },
  action,
) => {
  switch (action.type) {
    case ADD_CHARACTER:
      return {
        ...state,
        input: addAt(state.input, state.position, action.payload),
        position: state.position + 1,
      };

    case DELETE_CHARACTER:
      return {
        ...state,
        input: removeAt(state.input, state.position),
        position: removeOneKeepSigned(state.position),
      };

    case TOGGLE_CURSOR_COLOR:
      return {
        ...state,
        cursor:
          state.cursor === 'rgba(255, 255, 255, 0.2)'
            ? 'rgba(0, 0, 0, 0.2)'
            : 'rgba(255, 255, 255, 0.2)',
      };

    case CLEAN_CHARACTERS: {
      return {
        ...state,
        input: '',
        position: 0,
      };
    }

    case MOVE_CURSOR_RIGHT: {
      return {
        ...state,
        position:
          state.position < state.input.length
            ? state.position + 1
            : state.input.length,
      };
    }

    case MOVE_CURSOR_LEFT: {
      return {
        ...state,
        position: state.position > 0 ? state.position - 1 : 0,
      };
    }

    case SUBMIT: {
      const submitted = [...state.submitted, state.input];

      return {
        ...state,
        submitted,
        input: '',
        position: 0,
        resurrectPosition: submitted.length - 1,
        output: [...state.output, state.input],
      };
    }

    case CLEAR_HISTORY: {
      return {
        ...state,
        submitted: [],
        resurrectPosition: -1,
      };
    }

    case RESURRECT_LAST_COMMAND_BACKWARDS: {
      if (state.resurrectPosition === -1) {
        return {
          ...state,
        };
      }

      return {
        ...state,
        input: state.submitted[state.resurrectPosition],
        position: state.submitted[state.resurrectPosition].length,
        resurrectPosition: state.resurrectPosition - 1,
      };
    }

    case RESURRECT_LAST_COMMAND_FORWARDS: {
      if (state.resurrectPosition + 2 >= state.submitted.length) {
        return {
          ...state,
        };
      }

      return {
        ...state,
        input: state.submitted[state.resurrectPosition + 2],
        position: state.submitted[state.resurrectPosition + 2].length,
        resurrectPosition: state.resurrectPosition + 1,
      };
    }

    case ADD_TO_OUTPUT: {
      return {
        ...state,
        output: [...state.output, action.payload],
      };
    }

    case PROGRAM_NOT_FOUND: {
      return {
        ...state,
        output: [...state.output, `${action.payload} not found`],
      };
    }

    default:
      return state;
  }
};

export default terminal;
