import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import initialState from '../../constants/initialState';
import App from './App';

const mockStore = configureStore([]);

test('renders without crashing', () => {
  const store = mockStore(initialState);
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
