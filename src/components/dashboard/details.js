import React from 'react';
import { useSelector } from 'react-redux';

const Details = () => {
  const bikeData = useSelector((state) => state.bikeReducer);
  const { bike } = bikeData;
  return ();
};

export default Details;