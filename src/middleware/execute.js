import { executables } from '../home';
import { EXECUTE_PROGRAM } from '../constants/action-types';
import { addToOutput } from '../actions';

export function executeMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === EXECUTE_PROGRAM) {
        const { executable, args } = action.payload;
        try {
          const result = executables[executable](args);
          dispatch(addToOutput(result));
        } catch (e) {
          dispatch(addToOutput(`Error: ${e.message}`));
        }
      }
      return next(action);
    };
  };
}
