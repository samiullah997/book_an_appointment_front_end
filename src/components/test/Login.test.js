import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../redux/Store';
import LogIn from '../authentication/LogIn';

describe('Login', () => {
  it('renders correctly', () => {
    const tree = render(<Provider store={store}><Router><LogIn /></Router></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
