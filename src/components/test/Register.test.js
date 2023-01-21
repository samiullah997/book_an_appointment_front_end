import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../redux/Store';
import SignUp from '../authentication/SignUp';

describe('Register', () => {
  it('renders correctly', () => {
    const tree = render(<Provider store={store}><Router><SignUp /></Router></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
