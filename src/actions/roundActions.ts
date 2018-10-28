import { Dispatch } from 'redux';
import IStoreState from 'src/types/IStoreState';
import * as constants from '../constants/actions';
import createQuestions from '../lib/createQuestions';
import ICountry from '../types/ICountry';
import IQuestion from '../types/IQuestion';

export interface INewRoundAction {
  questions: IQuestion[];
  type: constants.NEW_ROUND;
}

export interface IAnswerQuestion {
  answer: number;
  question: IQuestion;
  round: number;
  type: constants.ANSWER_QUESTION;
}

export type RoundAction = INewRoundAction | IAnswerQuestion;

export const newRoundWithCountries = (
  countries: ICountry[],
): INewRoundAction => ({
  questions: createQuestions(countries),
  type: constants.NEW_ROUND,
});

export const newRound = () => {
  return (dispatch: Dispatch, getState: () => IStoreState) => {
    const countries = getState().country.countries;
    return dispatch(newRoundWithCountries(countries));
  };
};

export const answerQuestion = (
  round: number,
  question: IQuestion,
  answer: number,
): IAnswerQuestion => ({
  answer,
  question,
  round,
  type: constants.ANSWER_QUESTION,
});
