import Booking from '../constants/constant';

const initiaState = {
  bikes: [],
  bike: {},
};

const bikeReducer = (state = initiaState, { type, payload }) => {
  if (type === Booking.ALL_BIKES) {
    return {
      ...state,
      bikes: payload,
    };
  }
  if (type === Booking.ONE_BIKE) {
    return {
      ...state.bike,
      payload,
    };
  }
  return state;
};

export default bikeReducer;
