/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SignupDetailsApi from '../../redux/reducer/user';

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState('');
  const dispatch = useDispatch();
  const state = useSelector((state) => state.UserReducer);
  const { signedUp } = state;
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassowrd] = useState('');
  const [confirmPassword, setConfirmPassowrd] = useState('');
  const [userName, setUserName] = useState('');

  const registerUser = (e) => {
    e.preventDefault();
    setLoading(true);
    if (email === '' || name === '' || password === '') return;
    const newUser = {
      email,
      name,
      username: userName,
      password,
      password_confirmation: confirmPassword,
    };
    dispatch(SignupDetailsApi(newUser));
    setEmail('');
    setName('');
    setPassowrd('');
    setUserName('');
    setConfirmPassowrd('');
  };

  useEffect(() => {
    if (signedUp === 'up') {
      setLoading(false);
      setShowMessage('Signed Up Successfully');
    } else if (signedUp === 'down') {
      setLoading(false);
      setShowMessage('Email Already Exists');
      setTimeout(() => setShowMessage(''), 3000);
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
            <span className="text-xl text-green-800">{showMessage}</span>
          </div>
          <form onSubmit={registerUser}>
            <div className="mb-4 text-lg">
              <input className="rounded-3xl border-none bg-black bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-75 shadow-lg outline-none backdrop-blur-md" required onChange={(e) => setName(e.target.value)} value={name} type="text" name="name" placeholder="David John" />
            </div>

            <div className="mb-4 text-lg">
              <input className="rounded-3xl border-none bg-black bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-75 shadow-lg outline-none backdrop-blur-md" required onChange={(e) => setUserName(e.target.value)} value={userName} type="text" name="address" placeholder="username" />
            </div>

            <div className="mb-4 text-lg">
              <input className="rounded-3xl border-none bg-black bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-75 shadow-lg outline-none backdrop-blur-md" required onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="email" placeholder="john@gmail.com" />
            </div>

            <div className="mb-4 text-lg">
              <input className="rounded-3xl border-none bg-black bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-75 shadow-lg outline-none backdrop-blur-md" required onChange={(e) => setPassowrd(e.target.value)} value={password} type="Password" name="password" placeholder="password" />
            </div>

            <div className="mb-4 text-lg">
              <input className="rounded-3xl border-none bg-black bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-75 shadow-lg outline-none backdrop-blur-md" required onChange={(e) => setConfirmPassowrd(e.target.value)} value={confirmPassword} type="Password" name="confirm_password" placeholder="confirm password" />
            </div>
            <div className="mt-8 flex justify-center text-lg text-black">
              {loading ? (<img src="https://i.stack.imgur.com/kOnzy.gif" className="w-10 h-10" alt="loading" />) : (<button type="submit" className="rounded-3xl bg-black bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">Register</button>) }
            </div>
          </form>
          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {' '}
            Already Register?
            {' '}
            <a
              href="./"
              className="font-medium text-purple-600 hover:underline"
            >
              login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
