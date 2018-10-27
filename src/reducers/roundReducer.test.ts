import { newRoundWithCountries } from '../actions/roundActions';
import ICountry from '../types/ICountry';
import IRoundState from '../types/IRoundState';
import roundReducer from './roundReducer';

const initialState: IRoundState = {
  round: 0,
  rounds: [],
};

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

test('roundReducer() should reduce NEW_ROUND action', () => {
  const state: IRoundState = roundReducer(
    initialState,
    newRoundWithCountries(countries),
  );
  expect(state.round).toBe(1);
  expect(state.rounds.length).toBe(1);
  expect(state.rounds[0].id).toBe(1);
  expect(state.rounds[0].questions.length).toBe(10);
});
