import { saveAnswer } from '../actions/userActions';
import IAnswer from '../types/IAnswer';
import IQuestion from '../types/IQuestion';
import userReducer from './userReducer';

const initialState = { correctCountries: [], incorrectCountries: [] };

const question: IQuestion = {
  answers: [],
  id: 0,
  question: 'Austria',
};

const correctAnswer: IAnswer = {
  answer: 'Vienna',
  correct: true,
};

const incorrectAnswer: IAnswer = {
  answer: 'Berlin',
  correct: false,
};

test('userReducer() should handle initial state', () => {
  const state = userReducer();
  expect(state.correctCountries.length).toBe(0);
  expect(state.incorrectCountries.length).toBe(0);
});

test('userReducer() should handle SAVE_ANSWER with correct answer', () => {
  const state = userReducer(initialState, saveAnswer(question, correctAnswer));
  expect(state.incorrectCountries.length).toBe(0);
  expect(state.correctCountries.length).toBe(1);
  expect(state.correctCountries[0]).toBe('Austria');
});

test('userReducer() should handle SAVE_ANSWER with incorrect answer', () => {
  const state = userReducer(
    initialState,
    saveAnswer(question, incorrectAnswer),
  );
  expect(state.correctCountries.length).toBe(0);
  expect(state.incorrectCountries.length).toBe(1);
  expect(state.incorrectCountries[0]).toBe('Austria');
});

test('userReducer() should handle SAVE_ANSWER with correct answer when it is already correct', () => {
  const state = userReducer(
    { ...initialState, correctCountries: ['Austria'] },
    saveAnswer(question, correctAnswer),
  );
  expect(state.incorrectCountries.length).toBe(0);
  expect(state.correctCountries.length).toBe(1);
});

test('userReducer() should handle SAVE_ANSWER with incorrect answer when it is already incorrect', () => {
  const state = userReducer(
    { ...initialState, incorrectCountries: ['Austria'] },
    saveAnswer(question, incorrectAnswer),
  );
  expect(state.correctCountries.length).toBe(0);
  expect(state.incorrectCountries.length).toBe(1);
});

test('userReducer() should handle SAVE_ANSWER with correct answer and remove incorrect answer', () => {
  const state = userReducer(
    { ...initialState, incorrectCountries: ['Austria'] },
    saveAnswer(question, correctAnswer),
  );
  expect(state.incorrectCountries.length).toBe(0);
  expect(state.correctCountries.length).toBe(1);
});

test('userReducer() should handle SAVE_ANSWER with incorrect answer and remove correct answer', () => {
  const state = userReducer(
    { ...initialState, correctCountries: ['Austria'] },
    saveAnswer(question, incorrectAnswer),
  );
  expect(state.incorrectCountries.length).toBe(1);
  expect(state.correctCountries.length).toBe(0);
});
