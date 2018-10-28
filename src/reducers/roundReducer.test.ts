import { answerQuestion, newRoundWithCountries } from '../actions/roundActions';
import ICountry from '../types/ICountry';
import IQuestion from '../types/IQuestion';
import IRoundState from '../types/IRoundState';
import roundReducer, { initialState } from './roundReducer';

const question1: IQuestion = {
  answers: [
    { answer: 'Vienna', correct: true },
    { answer: 'Berlin', correct: false },
  ],
  id: 0,
  question: 'Austria',
};

const question2: IQuestion = {
  answers: [
    { answer: 'Paris', correct: true },
    { answer: 'London', correct: false },
  ],
  id: 1,
  question: 'France',
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

test('roundReducer() should handle initial state', () => {
  const state: IRoundState = roundReducer();
  expect(state.round).toBe(0);
  expect(state.rounds.length).toBe(0);
});

test('roundReducer() should handle NEW_ROUND action', () => {
  const state: IRoundState = roundReducer(
    initialState,
    newRoundWithCountries(countries),
  );
  expect(state.round).toBe(1);
  expect(state.rounds.length).toBe(1);
  expect(state.rounds[0].id).toBe(1);
  expect(state.rounds[0].questions.length).toBe(10);
});

test('roundReducer() should handle ANSWER_QUESTION action for correct answer with more questions available', () => {
  const state: IRoundState = {
    round: 1,
    rounds: [
      {
        active: true,
        currentQuestion: 0,
        id: 1,
        points: 0,
        questions: [question1, question2],
      },
    ],
  };
  const newState = roundReducer(state, answerQuestion(1, question1, 0));
  expect(newState.round).toBe(1);
  expect(newState.rounds[0].points).toBe(1);
  expect(newState.rounds[0].currentQuestion).toBe(1);
  expect(newState.rounds[0].active).toBeTruthy();
});

test('roundReducer() should handle ANSWER_QUESTION action for correct answer with no questions available', () => {
  const state: IRoundState = {
    round: 1,
    rounds: [
      {
        active: true,
        currentQuestion: 0,
        id: 1,
        points: 0,
        questions: [question1],
      },
    ],
  };
  const newState = roundReducer(state, answerQuestion(1, question1, 0));
  expect(newState.round).toBe(1);
  expect(newState.rounds[0].points).toBe(1);
  expect(newState.rounds[0].currentQuestion).toBe(0);
  expect(newState.rounds[0].active).toBeFalsy();
});

test('roundReducer() should handle ANSWER_QUESTION action for incorrect answer', () => {
  const state: IRoundState = {
    round: 1,
    rounds: [
      {
        active: true,
        currentQuestion: 0,
        id: 1,
        points: 0,
        questions: [question1, question2],
      },
    ],
  };
  const newState = roundReducer(state, answerQuestion(1, question1, 1));
  expect(newState.round).toBe(1);
  expect(newState.rounds[0].points).toBe(0);
  expect(newState.rounds[0].currentQuestion).toBe(1);
  expect(newState.rounds[0].active).toBeTruthy();
});

test('roundReducer() should handle ANSWER_QUESTION action for correct answer with multiple rounds', () => {
  const state: IRoundState = {
    round: 2,
    rounds: [
      {
        active: true,
        currentQuestion: 9,
        id: 1,
        points: 7,
        questions: [question1],
      },
      {
        active: true,
        currentQuestion: 0,
        id: 2,
        points: 0,
        questions: [question1, question2],
      },
    ],
  };
  const newState = roundReducer(state, answerQuestion(2, question1, 0));
  expect(newState.round).toBe(2);
  expect(newState.rounds[1].points).toBe(1);
  expect(newState.rounds[1].currentQuestion).toBe(1);
  expect(newState.rounds[1].active).toBeTruthy();
});
