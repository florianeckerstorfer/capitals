import { addCountry, setCountries } from '../actions/countryActions';
import countryReducer, { initialState } from './countryReducer';

test('countryReducer() should handle initial state', () => {
  const state = countryReducer();
  expect(state.countries.length).toBe(0);
});

test('countryReducer() should handle ADD_COUNTRY action', () => {
  const state = countryReducer(
    initialState,
    addCountry('Austria', 'Vienna', ['Europe']),
  );
  expect(state.countries.length).toBe(1);
  expect(state.countries[0].name).toBe('Austria');
  expect(state.countries[0].capital).toBe('Vienna');
});

test('countryReducer() should handle SET_COUNTRIES action', () => {
  const country1 = {
    capital: 'Vienna',
    continents: ['Europe'],
    name: 'Austria',
  };
  const country2 = { name: 'Spain', capital: 'Madrid', continents: ['Europe'] };
  const state = countryReducer(
    initialState,
    setCountries([country1, country2]),
  );
  expect(state.countries.length).toBe(2);
  expect(state.countries[0].name).toBe('Austria');
  expect(state.countries[1].name).toBe('Spain');
});
