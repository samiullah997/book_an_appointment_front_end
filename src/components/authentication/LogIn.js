/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SigninDetailsApi } from '../../redux/reducer/user';

const LogIn = () => {
  const [showMessage, setShowMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');
  const state = useSelector((state) => state.UserReducer);
  const { loggedIn } = state;
  const loginUser = (e) => {
    e.preventDefault();
    if (email === '' || password === '') return;
    const newUser = {
      email,
      password,
    };
    dispatch(SigninDetailsApi(newUser));
    setEmail('');
    setPassowrd('');
  };

  useEffect(() => {
    if (loggedIn === 'in') {
      navigate('/user/dashboard', { replace: true });
    }
    if (loggedIn === 'err') {
      setShowMessage('Your Cradential is not correct.');
      navigate('/', { replace: true });
    }
  }, [state]);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat bg-image">
      <div className="rounded-xl bg-white bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <img src="./favicon.png" width="150" alt="" />
            <h1 className="mb-2 text-2xl">Buy Bikes</h1>
            <span className="text-white">Enter Login Details</span>
            <span className="text-xl text-green-700">{showMessage}</span>
          </div>
          <form onSubmit={loginUser}>
            <div className="mb-4 text-lg">
              <input className="rounded-3xl border-none bg-black bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" required onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="name" placeholder="id@email.com" />
            </div>

            <div className="mb-4 text-lg">
              <input className="rounded-3xl border-none bg-black bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" required onChange={(e) => setPassowrd(e.target.value)} value={password} type="Password" name="name" placeholder="*********" />
            </div>
            <div className="mt-8 flex justify-center text-lg text-black">
              <button type="submit" className="rounded-3xl bg-black bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">Login</button>
            </div>
          </form>
          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {' '}
            Do not have an account?
            {' '}
            <a
              href="/signup"
              className="font-medium text-purple-600 hover:underline"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
