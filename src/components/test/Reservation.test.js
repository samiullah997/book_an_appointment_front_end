import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../redux/Store';
import Reservation from '../dashboard/Reservation';

describe('Reservations', () => {
  it('renders correctly', () => {
    window.localStorage.setItem('bookDoctorUser', 1);
    const tree = render(<Provider store={store}><Router><Reservation /></Router></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
