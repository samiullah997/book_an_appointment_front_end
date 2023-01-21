/* eslint-disable max-len */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addReservation } from '../../redux/reducer/reservationReducer';

const ReserveBike = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const bikeData = useSelector((state) => state.bikeReducer);
  const reservationData = useSelector((state) => state.reservationReducer);
  const { reservations } = reservationData;

  const [bikeDetail, setBikeDetails] = useState('');
  const { bikes } = bikeData;
  const setId = (e) => {
    const id = e.target.value;
    const selectedBike = bikes.find((bike) => bike.id === +id);
    setBikeDetails(selectedBike);
  };

  const checkReservation = (id) => {
    const check = reservations.find((reservation) => reservation.bike_id === id);
    if (check) {
      return true;
    }
    return false;
  };

  const userData = localStorage.getItem('bookBikeUser');
  const user = JSON.parse(userData);
  if (!user) {
    navigate('/');
  }

  const submitData = (e) => {
    e.preventDefault();
    const date = document.getElementById('date').value;
    const data = {
      user_id: user.userId,
      bike_id: bikeDetail.id,
      date,
      reserve: true,
    };
    dispatch(addReservation(data));
    document.getElementById('date').value = '';
  };
  return (
    <div className="w-full h-full bg-image border border-black">
      <form className="w-full h-full" onSubmit={submitData}>
        <div className="flex flex-col w-full h-full space-x-3 px-3 py-3 bg-green-700 bg-opacity-70 justify-center items-center">
          {bikeDetail && (
            <div className="flex flex-col justify-center items-center gap-2">
              <img src={bikeDetail.bike_image} alt="bike" className="w-3/4 sm:w-1/4" />
              <h1 className="font-bold text-2xl py-5 text-white">{bikeDetail.name}</h1>
            </div>
          )}

          <div className="flex flex-col w-full h-full justify-center items-center gap-2">
            <select onChange={setId} defaultValue="DEFAULT" className="bg-green-500 placeholder-gray-100 w-3/4 sm:w-1/4  hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
              <option disabled value="DEFAULT">Select Bike</option>
              {bikes.map((bike) => (
                <option key={bike.id} value={bike.id}>{bike.name}</option>
              ))}
            </select>
            <input type="date" required name="date" id="date" className="bg-green-500 w-3/4 sm:w-1/4 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" />
            {checkReservation(bikeDetail.id) ? (<img src="https://media.istockphoto.com/id/828928236/vector/red-rubber-stamp-icon-on-transparent-background.jpg?b=1&s=612x612&w=0&k=20&c=gP3E8Zi5YAaKcqdH7ZOsrDdNzHURvQ2gJNdZORjH9PA=" className="h-10 w-30" alt="reserved" />) : <button type="submit" className="bg-green-500 mt-4 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">Reserve</button>}
          </div>
        </div>
      </form>
    </div>
  );
};
export default ReserveBike;
