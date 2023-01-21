import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../redux/Store';
import ReserveList from '../dashboard/ReserveList';

describe('ReserveList', () => {
  it('renders correctly', () => {
    const tree = render(<Provider store={store}><Router><ReserveList /></Router></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
