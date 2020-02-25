import { executables } from '../home';
import { SUBMIT } from '../constants/action-types';
import { programNotFound, executeProgram } from '../actions';

export function submitMiddleware({ dispatch, getState }) {
  return function(next) {
    return function(action) {
      const { terminal } = getState();
      const returnValue = next(action);

      if (action.type === SUBMIT) {
        const newInput = terminal.input.replace(/\s+/g, ' ').trim();
        const inputs = newInput.split(' ');
        const [executable, ...args] = inputs;

        if (!Object.keys(executables).includes(executable)) {
          dispatch(programNotFound(executable));
        } else {
          dispatch(executeProgram(executable, args));
        }
      }

      return returnValue;
    };
  };
}
