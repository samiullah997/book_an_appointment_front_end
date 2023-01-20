import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';
import { updateBike } from '../../redux/reducer/bikeReducer';
import { addReservation } from '../../redux/reducer/reservationReducer';

const Reservation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const bikeData = useSelector((state) => state.bikeReducer);
  const { bike } = bikeData;
  const reserveBike = () => {
    dispatch(updateBike(bike.id));
  };
  const submitData = (e) => {
    e.preventDefault();
    const city = document.getElementById('city').value;
    const date = document.getElementById('date').value;
    const data = {
      reserveId: uuid(),
      bike,
      city,
      date,
      reserve: true,
    };
    reserveBike();
    dispatch(addReservation(data));
    document.getElementById('city').value = '';
    document.getElementById('date').value = '';
    navigate('/user/dashboard');
  };
  return (
    <div className="w-full h-full bg-image border border-black">
      <form className="w-full h-full" onSubmit={submitData}>
        <div className="flex flex-col w-full h-full space-x-3 px-3 py-3 bg-green-700 bg-opacity-70 justify-center items-center">
          <h1 className="font-bold text-2xl py-5 text-white">{bike.name}</h1>
          <hr />
          <p className="sm:w-3/4 sm:text-center sm:h-60 text-white h-3/4 w-full text-justify">
            {bike.description}
          </p>
          <div className="flex flex-col w-full h-full justify-center items-center">
            <input
              type="text"
              required
              placeholder="city"
              name="city"
              id="city"
              className="bg-green-500 placeholder-gray-100 w-3/4 sm:w-1/4  hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
            />
            <input
              type="date"
              required
              name="date"
              id="date"
              className="bg-green-500 mt-4 w-3/4 sm:w-1/4 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
            />
            {bike.reserve === true ? (
              <p className="text-white">This bike is already reserved</p>
            ) : (
              <button
                type="submit"
                className="bg-green-500 mt-4 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Reserve
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};
export default Reservation;
