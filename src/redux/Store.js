import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { fetchBikes } from './reducer/bikeReducer';
import reducers from './reducer/reducer';
import { fetchReservations } from './reducer/reservationReducer';

const store = createStore(reducers,
  applyMiddleware(thunk, logger));
store.dispatch(fetchBikes());
store.dispatch(fetchReservations());

export default store;
