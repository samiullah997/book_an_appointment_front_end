import { createAction } from '@reduxjs/toolkit';
import {
  deleteReserveBike,
  fetchReserveBike,
  reserveBike,
} from '../../api/BikeAppi';

const initiaState = {
  reservations: [],
  reservation: {},
};
const ADD_RESERVATION = createAction('ADD_RESERVATION');
const ALL_RESERVATIONS = createAction('ALL_RESERVATIONS');
const ONE_RESERVATION = createAction('ONE_RESERVATION');
const UPDATE_RESERVATION = createAction('UPDATE_RESERVATION');
const REMOVE_RESERVATION = createAction('REMOVE_RESERVATION');
const reservationReducer = (state = initiaState, action) => {
  switch (action.type) {
    case 'ALL_RESERVATIONS': {
      return {
        ...state,
        reservations: action.payload,
      };
    }
    case 'ADD_RESERVATION': {
      return {
        ...state,
        reservations: [...state.reservations, action.payload],
      };
    }
    case 'ONE_RESERVATION': {
      const oneReservation = state.reservations.find(
        (reservation) => reservation.id === action.payload,
      );
      return {
        ...state,
        reservation: oneReservation,
      };
    }
    case 'UPDATE_RESERVATION': {
      const index = state.reservations.findIndex(
        (reservation) => reservation.id !== action.payload,
      );
      const newArray = [...state.reservations];
      newArray[index].delete = true;
      return {
        ...state,
        reservations: newArray,
      };
    }
    case 'REMOVE_RESERVATION': {
      return {
        ...state,
        reservations: state.reservations.filter(
          (reservation) => reservation.id !== action.payload,
        ),
      };
    }
    default:
      return state;
  }
};
export const fetchReservations = () => async (dispatch) => {
  const reservations = await fetchReserveBike();
  initiaState.reservations = reservations;
  dispatch(ALL_RESERVATIONS(initiaState.reservations));
};
export const addReservation = (reservationData) => async (dispatch) => {
  dispatch(ADD_RESERVATION(reservationData));
  await reserveBike(reservationData);
};
export const removeReservation = (id) => async (dispatch) => {
  dispatch(REMOVE_RESERVATION(id));
  await deleteReserveBike(id);
};
export const updateReservation = (id) => async (dispatch) => {
  dispatch(UPDATE_RESERVATION(id));
};
export const oneReservation = (id) => async (dispatch) => {
  dispatch(ONE_RESERVATION(id));
};
export default reservationReducer;
