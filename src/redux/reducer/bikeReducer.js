import { createAction } from '@reduxjs/toolkit';

const ADD_BIKE = createAction('ADD_BIKE');
const ALL_BIKES = createAction('ALL_BIKES');
const ONE_BIKE = createAction('ONE_BIKE');
const REMOVE_BIKE = createAction('REMOVE_BIKE');
const UPDATE_BIKE = createAction('UPDATE_BIKE');
const initiaState = {
  bikes: [],
  bike: {},
};
const bikeReducer = (state = initiaState, action) => {
  switch (action.type) {
    case 'ALL_BIKES': {
      return {
        ...state,
        bikes: action.payload,
      };
    }
    case 'ADD_BIKE': {
      return {
        ...state,
        bikes: [...state.bikes, action.payload],
      };
    }
    case 'ONE_BIKE': {
      const oneBike = state.bikes.find((bike) => bike.id === action.payload);
      return {
        ...state,
        bike: oneBike,
      };
    }
    case 'UPDATE_BIKE': {
      const index = state.bikes.findIndex((bike) => bike.id === action.payload);
      const newArray = [...state.bikes];
      newArray[index].reserve = true;
      return {
        ...state,
        bikes: newArray,
      };
    }
    case 'REMOVE_BIKE': {
      return {
        ...state,
        bikes: state.bikes.filter((bike) => bike.id !== action.payload),
      };
    }
    default:
      return state;
  }
};
export const fetchBikes = (allBikes) => async (dispatch) => {
  initiaState.bikes.push(allBikes);
  dispatch(ALL_BIKES(initiaState.bikes));
};
export const addBike = (bikeData) => async (dispatch) => {
  dispatch(ADD_BIKE(bikeData));
};
export const removeBike = (id) => async (dispatch) => {
  dispatch(REMOVE_BIKE(id));
};
export const updateBike = (id) => async (dispatch) => {
  dispatch(UPDATE_BIKE(id));
};
export const singleBike = (id) => async (dispatch) => {
  dispatch(ONE_BIKE(id));
};
export default bikeReducer;
