import * as actions from '../constants/actions';
import { addCountry, setCountries } from './countryActions';

const austria = {
  capital: 'Vienna',
  continents: ['Europe'],
  largestCity: 'Vienna',
  name: 'Austria',
  secondLargestCity: 'Graz',
};

test('addCountry() should return ADD_COUNTRY action', () => {
  const action = addCountry(austria.name, austria.capital, austria.continents);
  expect(action.type).toBe(actions.ADD_COUNTRY);
  expect(action.country.name).toBe(austria.name);
  expect(action.country.capital).toBe(austria.capital);
  expect(action.country.largestCity).toBeUndefined();
  expect(action.country.secondLargestCity).toBeUndefined();
});

test('addCountry() should return ADD_COUNTRY action with optional arguments', () => {
  const action = addCountry(
    austria.name,
    austria.capital,
    austria.continents,
    austria.largestCity,
    austria.secondLargestCity,
  );
  expect(action.type).toBe(actions.ADD_COUNTRY);
  expect(action.country.name).toBe(austria.name);
  expect(action.country.capital).toBe(austria.capital);
  expect(action.country.largestCity).toBe(austria.largestCity);
  expect(action.country.secondLargestCity).toBe(austria.secondLargestCity);
});

test('setCountries() should return SET_COUNTRY action', () => {
  const country1 = {
    capital: 'Vienna',
    continents: ['Europe'],
    name: 'Austria',
  };
  const country2 = { name: 'Spain', capital: 'Madrid', continents: ['Europe'] };
  const action = setCountries([country1, country2]);
  expect(action.type).toBe(actions.SET_COUNTRIES);
  expect(action.countries.length).toBe(2);
  expect(action.countries[0].name).toBe('Austria');
  expect(action.countries[1].name).toBe('Spain');
});
