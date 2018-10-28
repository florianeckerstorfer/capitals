/* istanbul ignore file */

import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import countryReducer from './reducers/countryReducer';
import roundReducer from './reducers/roundReducer';

const configureStore = () =>
  createStore(
    combineReducers({
      country: countryReducer,
      round: roundReducer,
    }),
    composeWithDevTools(applyMiddleware(thunk)),
  );

export default configureStore;
