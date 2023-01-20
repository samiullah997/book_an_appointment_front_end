import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from '../authentication/SignUp';
import AddBike from '../dashboard/AddBike';
import Reservation from '../dashboard/Reservation';
import ReserveList from '../dashboard/ReserveList';
import ReserveBike from '../dashboard/ReserveBike';
import SidebarLayout from '../sidebar/sideBar';
import Details from '../dashboard/Details';
import DeleteBikes from '../dashboard/DeleteBikes';
import Home from '../dashboard/Home';

const MockApp = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/user/Reservation" element={<Reservation />} />
      <Route path="/user/ReserveBike" element={<ReserveBike />} />
      <Route element={<SidebarLayout />}>
        <Route path="/user/dashboard" element={<Home />} />
        <Route path="/user/AddBike" element={<AddBike />} />
        <Route path="/user/DeleteBikes" element={<DeleteBikes />} />
        <Route path="/user/Details" element={<Details />} />
        <Route path="/user/MyReservations" element={<ReserveList />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

it('should match snapshot of the App component', () => {
  const tree = renderer.create(<MockApp />).toJSON();
  expect(tree).toMatchSnapshot();
});
