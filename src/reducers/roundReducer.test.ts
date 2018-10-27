import { newRoundWithCountries } from '../actions/roundActions';
import ICountry from '../types/ICountry';
import IRoundState from '../types/IRoundState';
import roundReducer from './roundReducer';

const initialState: IRoundState = {
  round: 0,
  rounds: [],
};

const countries: ICountry[] = [
  { name: 'Austria', capital: 'Vienna' },
  { name: 'Germany', capital: 'Berlin' },
  { name: 'France', capital: 'Paris' },
  { name: 'Spain', capital: 'Madrid' },
  { name: 'Italy', capital: 'Rome' },
  { name: 'Sweden', capital: 'Stockholm' },
  { name: 'Denmark', capital: 'Copenhagen' },
  { name: 'United Kingkom', capital: 'London' },
  { name: 'Belgium', capital: 'Brussels' },
  { name: 'Poland', capital: 'Warsaw' },
  { name: 'Ukraine', capital: 'Kiev' },
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
