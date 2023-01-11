import Booking from '../constants/constant';
import { fetchAllBikes, getDetailBike } from '../services';

export const fetchBikes = () => (async (dispatch) => {
  const doctors = await fetchAllBikes();
  dispatch({
    type: Booking.ALL_BIKES,
    payload: doctors,
  });
});

export const singleBike = (id) => (async (dispatch) => {
  const data = await getDetailBike(id);
  dispatch({
    type: Booking.ONE_BIKE,
    payload: data,
  });
});
