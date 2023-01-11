import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducer/reducer';
import { fetchBikes } from './actions/bikeAction';

const store = createStore(reducers,
  applyMiddleware(thunk, logger));
store.dispatch(fetchBikes());

export default store;
