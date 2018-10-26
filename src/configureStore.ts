import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import countryReducer from './reducers/countryReducer';
import IReduxWindow from './types/IReduxWindow';

declare let window: IReduxWindow;

const configureStore = () =>
  createStore(
    combineReducers({
      country: countryReducer,
    }),
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  );

export default configureStore;
