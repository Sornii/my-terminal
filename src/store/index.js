import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';
import { executeMiddleware } from '../middleware/execute';
import logger from 'redux-logger';

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, executeMiddleware)),
);

export { store };
