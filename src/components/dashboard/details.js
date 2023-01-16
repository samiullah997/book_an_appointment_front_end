import React from 'react';
import { useSelector } from 'react-redux';
​
const Details = () => {
  const bikeData = useSelector((state) => state.bikeReducer);
  const { bike } = bikeData;
  return (
    <div className="container flex flex-row w-full m-28">
      <div className="container flex justify-center py-2  items-center">
        <img src={bike.picture} className="w-full h-full" alt="details" />
      </div>
      <div className="conatiner w-full h-auto flex flex-col items-end py-4  px-30">
        <h1 className="text-2xl font-bold py-4">{bike.name}</h1>
        <div className="flex flex-row justify-between w-60 border bg-gray-100 px-2 py-2">
          <span>Price</span>
          <span>
            $
            {bike.price}
          </span>
        </div>
        <h1 className="text-2xl font-bold py-2  px-4">{bike.model}</h1>
        <p className="text-2xl font-bold py-2  px-4">{bike.enginCapacity}</p>
        <button type="button" className="bg-green-500 mt-40 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">Reserve</button>
      </div>
    </div>
  );
};
​
export default Details;