import renderer from 'react-test-renderer';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../../redux/Store';
import App from '../../App';

const MockIndex = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

it('should match snapshot of the Index component', () => {
  const tree = renderer.create(<MockIndex />).toJSON();
  expect(tree).toMatchSnapshot();
});
