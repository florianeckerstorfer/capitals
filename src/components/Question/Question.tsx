import * as React from "react";
import { COUNTRY_QUESTION } from "../../constants/questions";
import ICapitalQuestion from "../../types/ICapitalQuestion";
import ICountryQuestion from "../../types/ICountryQuestion";
import IQuestion from "../../types/IQuestion";
import CapitalQuestion from "../CapitalQuestion/CapitalQuestion";
import CountryQuestion from "../CountryQuestion/CountryQuestion";

interface IProps {
  question: IQuestion;
  onAnswer: (answer: string) => void;
}

const Question = ({ question, onAnswer }: IProps) => {
  if (question.type === COUNTRY_QUESTION) {
    const countryQuestion = question as ICountryQuestion;
    return <CountryQuestion question={countryQuestion} onAnswer={onAnswer} />;
  }
  const capitalQuestion = question as ICapitalQuestion;
  return <CapitalQuestion question={capitalQuestion} onAnswer={onAnswer} />;
};

export default Question;
