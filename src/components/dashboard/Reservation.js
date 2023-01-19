import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addReservation } from '../../redux/reducer/reservationReducer';

const Reservation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const bikeData = useSelector((state) => state.bikeReducer);
  const { bike } = bikeData;
  const reservationData = useSelector((state) => state.reservationReducer);
  const { reservations } = reservationData;
  const userData = localStorage.getItem('bookBikeUser');
  const user = JSON.parse(userData);
  const submitData = (e) => {
    e.preventDefault();
    const date = document.getElementById('date').value;
    const data = {
      user_id: user.userId,
      bike_id: bike.id,
      date,
      reserve: true,
    };
    dispatch(addReservation(data));
    document.getElementById('date').value = '';
    navigate('/user/dashboard');
  };

  const checkReservation = (id) => {
    const check = reservations.find((reservation) => reservation.bike_id === id);
    if (check) {
      return true;
    }
    return false;
  };

  return (
    <div className="w-full h-full bg-image border border-black">
      <form className="w-full h-full" onSubmit={submitData}>
        <div className="flex flex-col w-full h-full space-x-3 px-3 py-3 bg-green-700 bg-opacity-70 justify-center items-center">
          <img src={bike.bike_image} alt="bike" className="w-3/4 sm:w-1/4  mt-4" />
          <h1 className="font-bold text-2xl py-5 text-white">{bike.name}</h1>
          <hr />
          <div className="flex flex-col w-full h-full justify-center items-center">
            <input type="date" required name="date" id="date" className="bg-green-500 mt-4 w-3/4 sm:w-1/4 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" />
            {checkReservation(bike.id) ? (<img src="https://media.istockphoto.com/id/828928236/vector/red-rubber-stamp-icon-on-transparent-background.jpg?b=1&s=612x612&w=0&k=20&c=gP3E8Zi5YAaKcqdH7ZOsrDdNzHURvQ2gJNdZORjH9PA=" className="h-10 w-30" alt="reserved" />) : <button type="submit" className="bg-green-500 mt-4 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">Reserve</button>}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Reservation;
