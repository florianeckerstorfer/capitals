import { combineReducers, createStore } from 'redux';
import countryReducer from './reducers/countryReducer';
import IReduxWindow from './types/IReduxWindow';

declare let window: IReduxWindow;

const configureStore = () =>
  createStore(
    combineReducers({
      country: countryReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

export default configureStore;
