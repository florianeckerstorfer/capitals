import { addCountry, setCountries } from '../actions/countryActions';
import ICountryState from '../types/IContryState';
import countryReducer from './countryReducer';

const initialState: ICountryState = {
  countries: [],
};

test('countryReducer() should reduce ADD_COUNTRY action', () => {
  const state = countryReducer(initialState, addCountry('Austria', 'Vienna'));
  expect(state.countries.length).toBe(1);
  expect(state.countries[0].name).toBe('Austria');
  expect(state.countries[0].capital).toBe('Vienna');
});

test('countryReducer() should reudce SET_COUNTRIES action', () => {
  const country1 = { name: 'Austria', capital: 'Vienna' };
  const country2 = { name: 'Spain', capital: 'Madrid' };
  const state = countryReducer(
    initialState,
    setCountries([country1, country2]),
  );
  expect(state.countries.length).toBe(2);
  expect(state.countries[0].name).toBe('Austria');
  expect(state.countries[1].name).toBe('Spain');
});
