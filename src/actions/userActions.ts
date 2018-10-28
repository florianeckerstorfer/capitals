import { SAVE_ANSWER } from '../constants/actions';
import IAnswer from '../types/IAnswer';
import IQuestion from '../types/IQuestion';

export interface ISaveAnswer {
  question: IQuestion;
  answer: IAnswer;
  type: SAVE_ANSWER;
}

export type UserAction = ISaveAnswer;

export const saveAnswer = (
  question: IQuestion,
  answer: IAnswer,
): ISaveAnswer => ({
  answer,
  question,
  type: SAVE_ANSWER,
});
