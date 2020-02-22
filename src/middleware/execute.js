import helloExecutables from '../programs/hello';
import sumExecutables from '../programs/sum';
import { SUBMIT } from '../constants/action-types';
import { programNotFound } from '../actions';

const executables = {
  ...helloExecutables,
  ...sumExecutables,
};

export function executeMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === SUBMIT) {
        // const { executable } = action.payload;
        // if (!Object.keys(executables).includes(executable)) {
        //   dispatch(action);
        //   return dispatch(programNotFound());
        // }
      }
      return next(action);
    };
  };
}
