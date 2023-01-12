import {
  BrowserRouter, Outlet, Route, Routes,
} from 'react-router-dom';
import LogIn from './components/authentication/LogIn';
import SignUp from './components/authentication/SignUp';
import AddBike from './components/dashboard/AddBike';
import Home from './components/dashboard/Home';
import SideBar from './components/sidebar/sideBar';

const SidebarLayout = () => (
  <>
    <SideBar />
    <Outlet />
  </>
);

function App() {
  return (
    <div className="flex w-screen justify-start h-screen items-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<SidebarLayout />}>
            <Route path="/user/dashboard" element={<Home />} />
            <Route path="/user/AddBike" element={<AddBike />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
