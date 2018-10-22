import { shallow } from "enzyme";
import * as React from "react";
import { COUNTRY_QUESTION } from "../../constants/questions";
import ICountryQuestion from "../../types/ICountryQuestion";
import CountryQuestion from "./CountryQuestion";

test("CountryQuestion should render country question", () => {
  const question: ICountryQuestion = {
    country: { name: "Austria", capital: "Vienna" },
    options: ["Germany", "Switzerland", "Australia", "Austria"],
    type: COUNTRY_QUESTION
  };
  const handleAnswer = jest.fn();
  const component = shallow(
    <CountryQuestion question={question} onAnswer={handleAnswer} />
  );
  expect(component.exists()).toBeTruthy();
  const text = component.find(".question__text");
  const answers = component.find(".question__answers");
  const answer1 = answers.childAt(0);
  const answer2 = answers.childAt(1);
  const answer3 = answers.childAt(2);
  const answer4 = answers.childAt(3);
  expect(text.text()).toBe("What country is Vienna the capital of?");
  expect(answer1.text().trim()).toBe("Germany");
  expect(answer2.text().trim()).toBe("Switzerland");
  expect(answer3.text().trim()).toBe("Australia");
  expect(answer4.text().trim()).toBe("Austria");
});

test("CountryQuestion should handle correct answer", () => {
  const question: ICountryQuestion = {
    country: { name: "Austria", capital: "Vienna" },
    options: ["Germany", "Switzerland", "Australia", "Austria"],
    type: COUNTRY_QUESTION
  };
  const handleAnswer = jest.fn();
  const component = shallow(
    <CountryQuestion question={question} onAnswer={handleAnswer} />
  );
  const answer4 = component
    .find(".question__answers")
    .childAt(3)
    .find("input");
  answer4.simulate("change", { nativeEvent: { target: { value: "Austria" } } });
  expect(handleAnswer).toHaveBeenCalledTimes(1);
  expect(handleAnswer.mock.calls[0][0]).toBe("Austria");
});
