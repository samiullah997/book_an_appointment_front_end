import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeReservation } from '../../redux/reducer/reservationReducer';

const ReserveList = () => {
  const dispatch = useDispatch();
  const reservationData = useSelector((state) => state.reservationReducer);
  const bikeData = useSelector((state) => state.bikeReducer);
  const { bikes } = bikeData;
  const { reservations } = reservationData;

  const reversed = [...reservations].reverse();
  if (!reversed) {
    return (
      <h6 className="text-center">Loading ...</h6>
    );
  }
  const deleteItem = (id) => {
    dispatch(removeReservation(id));
  };
  return (
    <div className="contianer flex flex-col items-center w-full h-full overflow-scroll">
      <div>List of All Bikes</div>
      <div className="container flex flex-wrap px-3 justify-center items-center w-full gap-2 h-full border">
        {
                    reversed.map(((item) => {
                      const data = bikes.filter((bike) => bike.id !== item.id);
                      const bike = data[0];
                      return (
                        <div className="h-auto bg-gray-50 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700" key={item.id}>
                          <img className="rounded-t-lg w-96 h-96 lg:w-50 lg:h-50" src={bike.bike_image} alt="" />
                          <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{bike.name}</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                              $
                              {bike.daily_rate}
                            </p>
                            <div className="flex flex-row justify-between">
                              <button type="button" onClick={() => dispatch(deleteItem(item.id))} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">
                                Return
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1 text-white" fillRule="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                              </button>
                              <div />
                            </div>
                          </div>
                        </div>
                      );
                    }))
                }
      </div>
    </div>
  );
};

export default ReserveList;
