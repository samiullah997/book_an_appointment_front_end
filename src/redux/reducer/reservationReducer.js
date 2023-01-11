import Booking from '../constants/constant';

const initiaState = {
  reservations: [],
  reservation: {},
};

const reservationReducer = (state = initiaState, { type, payload }) => {
  if (type === Booking.ALL_RESERVATIONS) {
    return {
      ...state,
      reservations: [payload],
    };
  }
  if (type === Booking.CREATE_RESERVATION) {
    return {
      ...state,
      payload,
    };
  }

  if (type === Booking.ONE_RESERVATION) {
    return {
      ...state.reservation, payload,
    };
  }
  return state;
};

export default reservationReducer;
