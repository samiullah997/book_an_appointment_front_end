import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../redux/Store';
import Home from '../dashboard/Home';

describe('Home', () => {
  it('renders correctly', () => {
    const tree = render(<Provider store={store}><Router><Home /></Router></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
