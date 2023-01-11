import {
  BrowserRouter, Outlet, Route, Routes,
} from 'react-router-dom';
import LogIn from './components/authentication/LogIn';
import SignUp from './components/authentication/SignUp';
import Home from './components/dashboard/Home';
// import SideBar from './components/sidebar/SideBar';

const SidebarLayout = () => (
  <>
    {/* <SideBar /> */}
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
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
