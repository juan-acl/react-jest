import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from 'redux';
import { reducer } from '../reducers';
import { logger } from '../middlewares';

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhancers = composeAlt(applyMiddleware(logger));

const store = createStore(reducer, composedEnhancers);

export { store };
