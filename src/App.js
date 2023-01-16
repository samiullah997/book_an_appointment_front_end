import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import LogIn from './components/authentication/LogIn';
import SignUp from './components/authentication/SignUp';
import AddBike from './components/dashboard/AddBike';
import DeleteBikes from './components/dashboard/DeleteBikes';
import Details from './components/dashboard/Details';
import Home from './components/dashboard/Home';
import SideBar from './components/sidebar/sideBar';

const SidebarLayout = () => (
  <>
    <SideBar />
    <Outlet />
  </>
);
export SidebarLayout
