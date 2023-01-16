import React from 'react';
import { useSelector } from 'react-redux';

const Details = () => {
  const bikeData = useSelector((state) => state.bikeReducer);
  const { bike } = bikeData;
  return (
    <div>
      <div>
        <img src={bike.picture} alt="bike picture" />
      </div>
      <div>
        <h1>{bike.name}</h1>
        <div>
          <span>Price</span>
          <span>${bike.price}</span>
        </div>
        <h1> {bike.model}</h1>
        <p> {bike.enginCapacity}</p>
        <button type="button">Reserve</button>
      </div>
    </div>
  );
};

export default Details;
