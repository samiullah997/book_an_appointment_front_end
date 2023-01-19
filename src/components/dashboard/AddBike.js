import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
// import { useNavigate } from 'react-router-dom';
import { addBike } from '../../redux/reducer/bikeReducer';

const AddBike = () => {
  // const navigate = useNavigate();
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');
  const [bikeType, setBikeType] = useState('');
  const [description, setDescription] = useState('');
  const [picture, setPicture] = useState('');
  const dispatch = useDispatch();

  const submitBikeData = (e) => {
    e.preventDefault();
    const userData = localStorage.getItem('bookBikeUser');
    const user = JSON.parse(userData);
    console.log(user.userId);
    if (!name || !brand || !price || !bikeType || !picture) return;
    const formData = {
      id: uuid(),
      bike_image: picture,
      name,
      brand,
      daily_rate: price,
      description,
      bike_type: bikeType,
      user_id: user.userId,
    };

    dispatch(addBike(formData));
    setPicture('');
    setBrand('');
    setName('');
    setPrice('');
    setBikeType('');
    setDescription('');
    setMessage('Bike added successfully');
  };
  return (
    <div className="w-full h-full">
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div>
          <a href="/">
            <h3 className="text-4xl font-bold text-purple-600">
              Add Bike Details
            </h3>
          </a>
          <div className="flex flex-row justify-center items-center text-2xl font-bold text-green-700 mt-4">{message}</div>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
          <form onSubmit={submitBikeData}>
            <div>
              <div className="block text-sm font-medium text-gray-700 undefined">Picture</div>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="picture"
                  onChange={(e) => setPicture(e.target.value)}
                  value={picture}
                  className="px-2 block w-full h-10 mt-1 border border-gray-600 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="url"
                  required
                />
              </div>
            </div>
            <div>
              <div className="block text-sm font-medium text-gray-700 undefined">Name</div>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="px-2 block w-full h-10 mt-1 border border-gray-600 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Honda125"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <div className="block text-sm font-medium text-gray-700 undefined">Brand</div>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="model"
                  onChange={(e) => setBrand(e.target.value)}
                  value={brand}
                  className="px-2 block w-full h-10 mt-1 border border-gray-600 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Bike Brand"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <div className="block text-sm font-medium text-gray-700 undefined">
                Bike Type
              </div>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="engin_capacity"
                  onChange={(e) => setBikeType(e.target.value)}
                  value={bikeType}
                  className="px-2 block w-full h-10 mt-1 border border-gray-600 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Bike Type"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <div className="block text-sm font-medium text-gray-700 undefined">
                Price
              </div>
              <div className="flex flex-col items-start">
                <input
                  type="number"
                  name="price"
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                  className="px-2 block w-full h-10 mt-1 border border-gray-600 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="$200"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <div className="block text-sm font-medium text-gray-700 undefined">Description</div>
              <div className="flex flex-col items-start">
                <textarea
                  type="text"
                  name="description"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  className="px-2 block w-full h-28 mt-1 border border-gray-600 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="description here...."
                  required
                />
              </div>
            </div>
            <div className="flex items-center justify-center mt-4">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
              >
                Add Bike
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBike;
