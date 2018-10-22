import { shallow } from "enzyme";
import * as React from "react";
import { CAPITAL_QUESTION, COUNTRY_QUESTION } from "../../constants/questions";
import ICapitalQuestion from "../../types/ICapitalQuestion";
import ICountryQuestion from "../../types/ICountryQuestion";
import Question from "./Question";

const austria = { name: "Austria", capital: "Vienna" };

test("Question should render country question", () => {
  const question: ICountryQuestion = {
    country: austria,
    options: [],
    type: COUNTRY_QUESTION
  };
  const handleAnswer = jest.fn();
  const component = shallow(
    <Question question={question} onAnswer={handleAnswer} />
  );
  expect(component.exists()).toBeTruthy();
  expect(component.name()).toBe("CountryQuestion");
});

test("Question should render capital question", () => {
  const question: ICapitalQuestion = {
    country: austria,
    options: [],
    type: CAPITAL_QUESTION
  };
  const handleAnswer = jest.fn();
  const component = shallow(
    <Question question={question} onAnswer={handleAnswer} />
  );
  expect(component.exists()).toBeTruthy();
  expect(component.name()).toBe("CapitalQuestion");
});
