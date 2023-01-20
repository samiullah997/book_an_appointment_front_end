import React from 'react';
import {
  FaTwitter, FaFacebookF, FaVine, FaPinterestP,
} from 'react-icons/fa';
import { TiSocialGooglePlus } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const current = new Date();
const year = current.getFullYear();
const SideBar = () => (
  <div className="flex flex-col w-80 h-screen border border-blue-600 rounded  bg-gray-200 text-center justify-center items-center">
    <img
      src="https://www.graphicsprings.com/filestorage/stencils/6658e537767711d19f911c852900686c.png?width=500&height=500"
      width="150"
      alt=""
      className="animate-headShake"
    />
    <div className="container flex flex-col justify-center h-full px-3">
      <ul className="flex flex-col justify-center space-y-4">
        <li className="border border-gray-400 hover:bg-gray-400 rounded-xl hover:border-gray-200 hover:text-black cursor-pointer font-sans"><Link to="/user/dashboard"><p className="py-2">All Bikes</p></Link></li>
        <li className="border border-gray-400 hover:bg-gray-400 rounded-xl hover:border-gray-200 hover:text-black cursor-pointer font-sans"><Link to="/user/AddBike"><p className="py-2 w-full">Add Bike</p></Link></li>
        <li className="border border-gray-400 hover:bg-gray-400 rounded-xl hover:border-gray-200 hover:text-black cursor-pointer font-sans"><Link to="/user/DeleteBikes"><p className="py-2 w-full">Delete Bikes</p></Link></li>
        <li className="border border-gray-400 hover:bg-gray-400 rounded-xl hover:border-gray-200 hover:text-black cursor-pointer font-sans"><Link to="/user/ReserveBike"><p className="py-2 w-full">Reserve Bikes</p></Link></li>
        <li className="border border-gray-400 hover:bg-gray-400 rounded-xl hover:border-gray-200 hover:text-black cursor-pointer font-sans"><Link to="/user/MyReservations"><p className="py-2 w-full">My Reservations</p></Link></li>

      </ul>
    </div>
    <div className="footer">
      <div className="social flex justify-center space-x-2">
        <FaTwitter />
        <FaFacebookF />
        <TiSocialGooglePlus />
        <FaVine />
        <FaPinterestP />
      </div>
      <small>
        &copy;
        {year}
        {' '}
        BOOK AN APPOINTMENT
      </small>
    </div>
  </div>
);
export default SideBar;
