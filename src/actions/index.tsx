import * as constants from "../constants/actions";
import ICountry from "../types/ICountry";
import ICountryQuestion from "../types/ICountryQuestion";
import Question from "../types/Question";

export interface IAddCountry {
  type: constants.ADD_COUNTRY;
  country: ICountry;
}

export interface IAddCountryQuestion {
  type: constants.ADD_COUNTRY_QUESTION;
  question: ICountryQuestion;
}

export interface IAnswerQuestion {
  type: constants.ANSWER_QUESTION;
  question: ICountryQuestion;
  answer: string;
}

export type CountryAction = IAddCountry | IAddCountryQuestion | IAnswerQuestion;

export function addCountry(country: string, capital: string): IAddCountry {
  return { type: constants.ADD_COUNTRY, country: { country, capital } };
}

export function addCountryQuestion(
  country: ICountry,
  question: Question
): IAddCountryQuestion {
  return {
    question: { country, question },
    type: constants.ADD_COUNTRY_QUESTION
  };
}

export function answerQuestion(
  question: ICountryQuestion,
  answer: string
): IAnswerQuestion {
  return {
    answer,
    question,
    type: constants.ANSWER_QUESTION
  };
}
