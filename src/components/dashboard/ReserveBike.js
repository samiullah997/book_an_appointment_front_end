import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-uuid';
import { updateBike } from '../../redux/reducer/bikeReducer';
import { addReservation } from '../../redux/reducer/reservationReducer';

const ReserveBike = () => {
  const dispatch = useDispatch();
  const bikeData = useSelector((state) => state.bikeReducer);
  const [bikeDetail, setBikeDetails] = useState('');
  const { bikes } = bikeData;
  const setId = (e) => {
    const id = e.target.value;
    const selectedBike = bikes.find((bike) => bike.id === id);
    setBikeDetails(selectedBike);
  };
  const submitData = (e) => {
    e.preventDefault();
    const city = document.getElementById('city').value;
    const date = document.getElementById('date').value;
    const data = {
      reserveId: uuid(),
      bike: bikeDetail,
      city,
      date,
      reserve: true,
    };
    dispatch(addReservation(data));
    dispatch(updateBike(bikeDetail.id));
    document.getElementById('city').value = '';
    document.getElementById('date').value = '';
  };
  return (
    <div className="w-full h-full bg-image border border-black">
      <form className="w-full h-full" onSubmit={submitData}>
        <div className="flex flex-col w-full h-full space-x-3 px-3 py-3 bg-green-700 bg-opacity-70 justify-center items-center">
          {bikeDetail && (
            <div className="flex flex-col justify-center items-center gap-2">
              <img
                src={bikeDetail.picture}
                alt="bike"
                className="w-3/4 sm:w-1/4"
              />
              <h1 className="font-bold text-2xl py-5 text-white">
                {bikeDetail.name}
              </h1>
              <p className="sm:w-3/4 sm:text-center sm:h-60 text-white h-3/4 w-full text-justify">
                {bikeDetail.description}
              </p>
            </div>
          )}
          <div className="flex flex-col w-full h-full justify-center items-center gap-2">
            <select
              onChange={setId}
              className="bg-green-500 placeholder-gray-100 w-3/4 sm:w-1/4  hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
            >
              <option value="0">Select Bike</option>
              {bikes.map((bike) => (
                <option key={bike.id} value={bike.id}>
                  {bike.name}
                </option>
              ))}
            </select>
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
              className="bg-green-500 w-3/4 sm:w-1/4 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
            />
            {bikeDetail.reserve === true ? (
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
export default ReserveBike;
