/* istanbul ignore file */

import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import countryReducer from './reducers/countryReducer';
import roundReducer from './reducers/roundReducer';

const persistConfig = {
  blacklist: ['country'],
  key: 'capitals',
  storage,
};

const rootReducer = combineReducers({
  country: countryReducer,
  round: roundReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
  const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk)),
  );
  const persistor = persistStore(store);

  return { store, persistor };
};

export default configureStore;
