import * as actions from '../constants/actions';
import ICountry from '../types/ICountry';
import { newRoundWithCountries } from './roundActions';

const countries: ICountry[] = [
  { name: 'Austria', capital: 'Vienna', continents: ['Europe'] },
  { name: 'Germany', capital: 'Berlin', continents: ['Europe'] },
  { name: 'France', capital: 'Paris', continents: ['Europe'] },
  { name: 'Spain', capital: 'Madrid', continents: ['Europe'] },
  { name: 'Italy', capital: 'Rome', continents: ['Europe'] },
  { name: 'Sweden', capital: 'Stockholm', continents: ['Europe'] },
  { name: 'Denmark', capital: 'Copenhagen', continents: ['Europe'] },
  { name: 'United Kingkom', capital: 'London', continents: ['Europe'] },
  { name: 'Belgium', capital: 'Brussels', continents: ['Europe'] },
  { name: 'Poland', capital: 'Warsaw', continents: ['Europe'] },
  { name: 'Ukraine', capital: 'Kiev', continents: ['Europe'] },
];

test('newRoundWithCountries() should return NEW_ROUND action', () => {
  const action = newRoundWithCountries(countries);
  expect(action.type).toBe(actions.NEW_ROUND);
  expect(action.questions.length).toBe(10);
});
