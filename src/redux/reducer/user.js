import axios from 'axios';
import { createAction } from '@reduxjs/toolkit';

const baseUrl = 'http://localhost:3001/';

const initialState = {
  name: '',
  email: '',
  loggedIn: false,
  userId: '',
  signedUp: false,
};

// Constants Action Creators
const SIGNUP = createAction('SIGNUP');
const LOGIN = createAction('LOGIN');
const LOGOUT = createAction('LOGOUT');

// Reducesrs
export const userReducertrying = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNUP':
      return {
        ...action.payload,
      };
    case 'LOGIN':
      // console.log('SIGNUP', action);
      return action.payload;
    default:
      return state;
  }
};

const SignupDetailsApi = (details) => async (dispatch) => {
  const { name, email, password, address } = details;
  try {
    await axios({
      method: 'post',
      url: 'http://localhost:3001/users',
      data: {
        user: {
          email,
          password,
          name,
          address,
        },
      },
    });

    dispatch(
      SIGNUP({
        name: '',
        email: '',
        loggedIn: false,
        userId: '',
        signedUp: 'up',
      })
    );
  } catch (error) {
    dispatch(
      SIGNUP({
        name: '',
        email: '',
        loggedIn: false,
        userId: '',
        signedUp: 'down',
      })
    );
  }
};

export const SigninDetailsApi = (details) => async (dispatch) => {
  const { email, password } = details;
  try {
    const signUpRespons = await axios({
      method: 'post',
      url: `${baseUrl}/users/sign_in`,
      data: {
        user: {
          email,
          password,
        },
      },
    });

    const { data, headers } = signUpRespons;
    const { user } = data;
    const { Authorization } = headers;
    const mainUser = {
      name: user.name,
      email: user.email,
      loggedIn: 'in',
      userId: user.id,
      signedUp: true,
    };
    localStorage.setItem('userAuth', JSON.stringify(Authorization));
    localStorage.setItem('bookBikeUser', JSON.stringify(mainUser));
    dispatch(LOGIN(mainUser));
  } catch (error) {
    dispatch(
      LOGIN({
        name: '',
        email: '',
        loggedIn: 'err',
        userId: '',
        signedUp: false,
      })
    );
  }
};

export const hitAPIWithLogoutDetails = (auth) => async (dispatch) => {
  const { userAuth } = auth;
  try {
    await fetch(`${baseUrl}/users/sign_out`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${userAuth}`,
      },
    });

    dispatch(
      LOGOUT({
        ...initialState,
        loggedIn: 'out',
        signedUp: false,
      })
    );

    localStorage.removeItem('userAuth');
    localStorage.removeItem('bookDoctorUser');
  } catch (error) {
    dispatch(
      LOGOUT({
        name: '',
        email: '',
        loggedIn: 'out',
        userId: '',
        signedUp: false,
      })
    );
  }
};

export default SignupDetailsApi;
