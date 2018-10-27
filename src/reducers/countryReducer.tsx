import { CountryAction } from '../actions/countryActions';
import { ADD_COUNTRY, SET_COUNTRIES } from '../constants/actions';
import ICountryState from '../types/IContryState';

export const initialState: ICountryState = {
  countries: [],
};

export default function countryReducer(
  state: ICountryState = initialState,
  action: CountryAction,
): ICountryState {
  switch (action.type) {
    case ADD_COUNTRY:
      return { ...state, countries: state.countries.concat([action.country]) };

    case SET_COUNTRIES:
      return { ...state, countries: action.countries };
  }

  return state;
}
