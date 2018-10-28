import { saveAnswer } from '../actions/userActions';
import { SAVE_ANSWER } from '../constants/actions';
import IAnswer from '../types/IAnswer';
import IQuestion from '../types/IQuestion';

test('saveAnswer() should return SAVE_ANSWER action', () => {
  const question: IQuestion = {
    answers: [],
    id: 0,
    question: 'Austria',
  };
  const answer: IAnswer = {
    answer: 'Vienna',
    correct: true,
  };
  const action = saveAnswer(question, answer);
  expect(action.type).toBe(SAVE_ANSWER);
  expect(action.question).toBe(question);
  expect(action.answer).toBe(answer);
});
