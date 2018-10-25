import { CountryAction } from '../actions/countryActions';
import { ADD_COUNTRY, SET_COUNTRIES } from '../constants/actions';
import IStoreState from '../types/IStoreState';

export const initialState: IStoreState = {
  countries: [],
};

export default function countryReducer(
  state: IStoreState = initialState,
  action: CountryAction,
): IStoreState {
  switch (action.type) {
    case ADD_COUNTRY:
      return { ...state, countries: state.countries.concat([action.country]) };

    case SET_COUNTRIES:
      return { ...state, countries: action.countries };
  }

  return state;
}
