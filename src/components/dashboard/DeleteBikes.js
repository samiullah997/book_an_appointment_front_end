import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeBike } from '../../redux/reducer/bikeReducer';

const DeleteBikes = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const bikeData = useSelector((state) => state.bikeReducer);
  const { bikes } = bikeData;
  const userData = localStorage.getItem('bookBikeUser');
  const user = JSON.parse(userData);
  if (!user) {
    navigate('/');
  }
  const reversed = [...bikes].reverse();
  if (!reversed) {
    return (
      <h6 className="text-center">Loading ...</h6>
    );
  }
  const deleteItem = (id) => {
    dispatch(removeBike(id));
    setMessage('Bike Deleted Successfully');
  };
  return (
    <div className="contianer flex flex-col items-center w-full h-full">
      <div className="text-2xl font-bold">List of All Bikes</div>
      <div className="text-xl text-red-900">{message}</div>
      <div className="container flex flex-col px-3 items-center h-full border">
        {
          reversed.map((item) => (
            <div className="w-full text-gray-900 bg-white py-2 rounded-lg  dark:text-white" key={item.id}>
              <div className="relative border dark:bg-gray-700 dark:border-gray-700 inline-flex items-center justify-between w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                {item.name}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-red-900 cursor-pointer" onClick={() => deleteItem(item.id)}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default DeleteBikes;
