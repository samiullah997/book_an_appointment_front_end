import React from 'react';
import {
  FaTwitter, FaFacebookF, FaVine, FaPinterestP,
} from 'react-icons/fa';
import { TiSocialGooglePlus } from 'react-icons/ti';​
 const current = new Date()
 const year = current.getFullYear()
const SideBar = () => (
  <div className="flex flex-col w-60 h-screen border border-blue-600 rounded  bg-gray-200 text-center justify-center items-center">
    <img src="https://www.graphicsprings.com/filestorage/stencils/6658e537767711d19f911c852900686c.png?width=500&height=500" width="150" alt="" className="animate-headShake" />
    <div className="container flex flex-col items-center justify-center h-full">
      <ul className="flex flex-col space-x-2 space-y-4">
        <li className="border border-gray-400 py-2 px-10 hover:bg-gray-400 rounded-xl hover:border-gray-200 hover:text-black cursor-pointer font-sans">All Bikes</li>
        <li className="border border-gray-400 py-2 px-10 hover:bg-gray-400 rounded-xl hover:border-gray-200 hover:text-black cursor-pointer font-sans">Add Bike,</li>
        <li className="border border-gray-400 py-2 px-10 hover:bg-gray-400 rounded-xl hover:border-gray-200 hover:text-black cursor-pointer font-sans">Delete Bikes</li>
        <li className="border border-gray-400 py-2 px-10 hover:bg-gray-400 rounded-xl hover:border-gray-200 hover:text-black cursor-pointer font-sans">Reserve Bike</li>
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
      <small>&copy; {year} BOOK AN APPOINTMENT</small>
    </div>
  </div>
);
​
export default SideBar;