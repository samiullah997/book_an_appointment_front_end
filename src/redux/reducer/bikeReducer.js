import { createAction } from '@reduxjs/toolkit';

const ADD_BIKE = createAction('ADD_BIKE');
const ALL_BIKES = createAction('ALL_BIKES');
const ONE_BIKE = createAction('ONE_BIKE');
const REMOVE_BIKE = createAction('REMOVE_BIKE');
const initiaState = {
  bikes: [
    {
      id: 1,
      name: 'Raptor 300 V-TWIN Bike',
      picture: 'https://rapidrides.pk/wp-content/uploads/2022/03/size-scaled.jpg',
      price: '1,560,000.00',
      modle: '2021',
    },
    {
      id: 2,
      name: 'Pulsar P150',
      picture: 'https://cdn.bajajauto.com/-/media/Assets/bajajauto/bikes/BikeListing/Pulsar/p-n-160.ashx',
      price: '119757',
      modle: '2021',
    },
    {
      id: 3,
      name: 'Raptor 300 V-TWIN Bike',
      picture: 'https://rapidrides.pk/wp-content/uploads/2022/03/size-scaled.jpg',
      price: '1,560,000.00',
      modle: '2021',
    },
    {
      id: 4,
      name: 'Pulsar P150',
      picture: 'https://cdn.bajajauto.com/-/media/Assets/bajajauto/bikes/BikeListing/Pulsar/p-n-160.ashx',
      price: '119757',
      modle: '2021',
    },
    {
      id: 5,
      name: 'Raptor 300 V-TWIN Bike',
      picture: 'https://rapidrides.pk/wp-content/uploads/2022/03/size-scaled.jpg',
      price: '1,560,000.00',
      modle: '2021',
    },
    {
      id: 6,
      name: 'Pulsar P150',
      picture: 'https://cdn.bajajauto.com/-/media/Assets/bajajauto/bikes/BikeListing/Pulsar/p-n-160.ashx',
      price: '119757',
      modle: '2021',
    },
    {
      id: 7,
      name: 'Raptor 300 V-TWIN Bike',
      picture: 'https://rapidrides.pk/wp-content/uploads/2022/03/size-scaled.jpg',
      price: '1,560,000.00',
      modle: '2021',
    },
    {
      id: 8,
      name: 'Pulsar P150',
      picture: 'https://cdn.bajajauto.com/-/media/Assets/bajajauto/bikes/BikeListing/Pulsar/p-n-160.ashx',
      price: '119757',
      modle: '2021',
    },
  ],
  bike: {},
};

const bikeReducer = (state = initiaState, action) => {
  switch (action.type) {
    case 'ALL_BIKES':
      return {
        ...state,
        bikes: action.payload,
      };
    case 'ADD_BIKE':
      return {
        ...state,
        bikes: [...state.bikes, action.payload],
      };
    case 'ONE_BIKE':
      return {
        ...state,
        bike: action.payload,
      };
    case 'REMOVE_BIKE':
      return {
        ...state,
        bikes: state.bikes.filter((bike) => bike.id !== action.payload),
      };
    default:
      return state;
  }
};

export const fetchBikes = (allBikes) => async (dispatch) => {
  // const bikes = await fetchAllBikes();
  initiaState.bikes.push(allBikes);
  dispatch(ALL_BIKES(initiaState.bikes));
};

export const addBike = (bikeData) => async (dispatch) => {
  dispatch(ADD_BIKE(bikeData));
};

export const removeBike = (id) => async (dispatch) => {
  dispatch(REMOVE_BIKE(id));
};

export const singleBike = (id) => async (dispatch) => {
  dispatch(ONE_BIKE(id));
};

export default bikeReducer;
