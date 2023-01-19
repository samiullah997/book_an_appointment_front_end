import { createAction } from '@reduxjs/toolkit';
import {
  createBike, deleteBike, fetchAllBikes, fetchSingleBikes,
} from '../../api/BikeAppi';

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
      return {
        ...state,
        bike: action.payload,
      };
    }
    case 'UPDATE_BIKE': {
      return {
        ...state,
        bikes: action.payload,
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

export const fetchBikes = () => async (dispatch) => {
  const allBike = await fetchAllBikes();
  initiaState.bikes = allBike;
  dispatch(ALL_BIKES(initiaState.bikes));
};

export const addBike = (bikeData) => async (dispatch) => {
  dispatch(ADD_BIKE(bikeData));
  await createBike(bikeData);
};

export const removeBike = (id) => async (dispatch) => {
  dispatch(REMOVE_BIKE(id));
  await deleteBike(id);
};

export const updateBike = (id) => async (dispatch) => {
  dispatch(UPDATE_BIKE(id));
};

export const singleBike = (id) => async (dispatch) => {
  const singleBike = await fetchSingleBikes(id);
  dispatch(ONE_BIKE(singleBike));
};

export default bikeReducer;
