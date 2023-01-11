import { combineReducers } from 'redux';
import { userReducertrying } from './user';
import bikeReducer from './bikeReducer';
import reservationReducer from './reservationReducer';

const reducers = combineReducers({
  UserReducer: userReducertrying,
  bikeReducer,
  reservationReducer,
});

export default reducers;
