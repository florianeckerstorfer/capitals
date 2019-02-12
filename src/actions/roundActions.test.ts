import * as actions from '../constants/actions';
import initialState from '../constants/initialState';
import ICountry from '../types/ICountry';
import IQuestion from '../types/IQuestion';
import {
  answerQuestion,
  newRound,
  newRoundWithCountries,
} from './roundActions';

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

const question: IQuestion = {
  answers: [],
  id: 0,
  question: 'Austria',
};

test('newRoundWithCountries() should return NEW_ROUND action', () => {
  const action = newRoundWithCountries(countries);
  expect(action.type).toBe(actions.NEW_ROUND);
  expect(action.questions.length).toBe(10);
});

test('newRound() should dispatch newRoundWithCountres()', () => {
  const dispatch = jest.fn();
  const getState = jest.fn(() => ({
    ...initialState,
    country: { ...initialState.country, countries: [] },
  }));
  newRound()(dispatch, getState);
  expect(dispatch).toHaveBeenCalledTimes(1);
  expect(dispatch.mock.calls[0][0].type).toBe(actions.NEW_ROUND);
});

test('answerQuestion() should return ANSWER_QUESTION action', () => {
  const action = answerQuestion(1, question, 2);
  expect(action.type).toBe(actions.ANSWER_QUESTION);
  expect(action.round).toBe(1);
  expect(action.question.id).toBe(0);
  expect(action.answer).toBe(2);
});
