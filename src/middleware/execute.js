import helloExecutables from '../home/bin/hello';
import sumExecutables from '../home/bin/sum';
import helpExecutables from '../home/bin/help';
import { EXECUTE_PROGRAM } from '../constants/action-types';
import { addToOutput } from '../actions';

const executables = {
  ...helloExecutables,
  ...sumExecutables,
  ...helpExecutables,
};

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
