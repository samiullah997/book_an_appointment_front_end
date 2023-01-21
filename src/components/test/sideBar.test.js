import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../redux/Store';
import SideBar from '../sidebar/sideBar';

describe('SideBar', () => {
  it('renders correctly', () => {
    const tree = render(<Provider store={store}><Router><SideBar /></Router></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
