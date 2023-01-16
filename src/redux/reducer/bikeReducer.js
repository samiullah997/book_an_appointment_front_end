import { createAction } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit';
const ADD_BIKE = createAction('ADD_BIKE');
const ALL_BIKES = createAction('ALL_BIKES');
const ONE_BIKE = createAction('ONE_BIKE');
const REMOVE_BIKE = createAction('REMOVE_BIKE');
const UPDATE_BIKE = createAction('UPDATE_BIKE');
const initiaState = {
  bikes: [
    {
      id: 1,
      name: 'Raptor 300 V-TWIN Bike',
      picture:
        'https://rapidrides.pk/wp-content/uploads/2022/03/size-scaled.jpg',
      price: '1,560,000.00',
      modle: '2021',
      enginCapacity: '300cc',
      delete: false,
    },
    {
      id: 2,
      name: 'Pulsar P150',
      picture:
        'https://cdn.bajajauto.com/-/media/Assets/bajajauto/bikes/BikeListing/Pulsar/p-n-160.ashx',
      price: '119757',
      modle: '2021',
      enginCapacity: '300cc',
      delete: false,
    },
  ],
  bike: {},
};

export default bikeReducer;
