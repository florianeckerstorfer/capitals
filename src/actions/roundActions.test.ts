import * as actions from '../constants/actions';
import ICountry from '../types/ICountry';
import { newRound } from './roundActions';

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

test('newRound() should return NEW_ROUND action', () => {
  const dispatch = jest.fn();
  const getState = jest.fn(() => ({
    country: { countries },
  }));
  const action = newRound()(dispatch, getState);
  expect(action.type).toBe(actions.NEW_ROUND);
  expect(action.questions.length).toBe(10);
});
