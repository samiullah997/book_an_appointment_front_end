import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { useNavigate } from 'react-router-dom';
import { addBike } from '../../redux/reducer/bikeReducer';

const AddBike = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [model, setModel] = useState('');
  const [price, setPrice] = useState('');
  const [enginCapacity, setEnginCapacity] = useState('');
  const [picture, setPicture] = useState('');
  const dispatch = useDispatch();
  const submitBikeData = (e) => {
    e.preventDefault();
    if (!name || !model || !price || !enginCapacity || !picture) return;
    const formData = {
      id: uuid(),
      picture,
      name,
      model,
      price,
      enginCapacity,
      delete: false,
    };

    dispatch(addBike(formData));
    setPicture('');
    setModel('');
    setName('');
    setPrice('');
    setEnginCapacity('');
    navigate('/user/dashboard');
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
              <div className="block text-sm font-medium text-gray-700 undefined">Model</div>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="model"
                  onChange={(e) => setModel(e.target.value)}
                  value={model}
                  className="px-2 block w-full h-10 mt-1 border border-gray-600 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="2021"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <div className="block text-sm font-medium text-gray-700 undefined">
                Engin Capacity
              </div>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="engin_capacity"
                  onChange={(e) => setEnginCapacity(e.target.value)}
                  value={enginCapacity}
                  className="px-2 block w-full h-10 mt-1 border border-gray-600 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="100cc"
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
