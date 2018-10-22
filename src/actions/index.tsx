import { QUESTION_TYPE } from "src/constants/questions";
import * as constants from "../constants/actions";
import ICountry from "../types/ICountry";
import IQuestion from "../types/IQuestion";

export interface IAddCountry {
  type: constants.ADD_COUNTRY;
  country: ICountry;
}

export interface IAddQuestion {
  type: constants.ADD_QUESTION;
  question: IQuestion;
}

export interface IAnswerQuestion {
  type: constants.ANSWER_QUESTION;
  question: IQuestion;
  answer: string;
}

export type CountryAction = IAddCountry | IAddQuestion | IAnswerQuestion;

export function addCountry(name: string, capital: string): IAddCountry {
  return { type: constants.ADD_COUNTRY, country: { name, capital } };
}

export function addQuestion(
  country: ICountry,
  options: string[],
  type: QUESTION_TYPE
): IAddQuestion {
  return {
    question: { country, options, type },
    type: constants.ADD_QUESTION
  };
}

export function answerQuestion(
  question: IQuestion,
  answer: string
): IAnswerQuestion {
  return {
    answer,
    question,
    type: constants.ANSWER_QUESTION
  };
}
