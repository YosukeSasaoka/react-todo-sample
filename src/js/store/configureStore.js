import {createStore,  applyMiddleware} from 'redux'
import uuid from '../reducers/uuid'
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

export default function configureStore() {
  const logger = createLogger();
  const createStoreWithMiddleware = applyMiddleware(
    thunk, logger
  )(createStore);
  const store = createStoreWithMiddleware(uuid);
  return store;
}