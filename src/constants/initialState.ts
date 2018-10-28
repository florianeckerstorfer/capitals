import { initialState as countryInitialState } from '../reducers/countryReducer';
import { initialState as roundInitialState } from '../reducers/roundReducer';
import { initialState as userInitialState } from '../reducers/userReducer';
import IStoreState from '../types/IStoreState';

const initialState: IStoreState = {
  country: countryInitialState,
  round: roundInitialState,
  user: userInitialState,
};

export default initialState;
