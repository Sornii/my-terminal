import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';
import { executeMiddleware } from '../middleware/execute';
import { submitMiddleware } from '../middleware/submit';
import logger from 'redux-logger';

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(logger, submitMiddleware, executeMiddleware),
  ),
);

export { store };
