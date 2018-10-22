import { shallow } from "enzyme";
import * as React from "react";
import { CAPITAL_QUESTION } from "../../constants/questions";
import ICapitalQuestion from "../../types/ICapitalQuestion";
import CapitalQuestion from "./CapitalQuestion";

const options = ["Vienna", "Sidney", "Berlin", "Zürich"];

test("CapitalQuestion should render country question", () => {
  const question: ICapitalQuestion = {
    country: { name: "Austria", capital: "Vienna" },
    options,
    type: CAPITAL_QUESTION
  };
  const handleAnswer = jest.fn();
  const component = shallow(
    <CapitalQuestion question={question} onAnswer={handleAnswer} />
  );
  expect(component.exists()).toBeTruthy();
  const text = component.find(".question__text");
  const answers = component.find(".question__answers");
  const answer1 = answers.childAt(0);
  const answer2 = answers.childAt(1);
  const answer3 = answers.childAt(2);
  const answer4 = answers.childAt(3);
  expect(text.text()).toBe("What is the capital of Austria?");
  expect(answer1.text().trim()).toBe("Vienna");
  expect(answer2.text().trim()).toBe("Sidney");
  expect(answer3.text().trim()).toBe("Berlin");
  expect(answer4.text().trim()).toBe("Zürich");
});

test("CapitalQuestion should handle correct answer", () => {
  const question: ICapitalQuestion = {
    country: { name: "Austria", capital: "Vienna" },
    options,
    type: CAPITAL_QUESTION
  };
  const handleAnswer = jest.fn();
  const component = shallow(
    <CapitalQuestion question={question} onAnswer={handleAnswer} />
  );
  const answer4 = component
    .find(".question__answers")
    .childAt(0)
    .find("input");
  answer4.simulate("change", { nativeEvent: { target: { value: "Vienna" } } });
  expect(handleAnswer).toHaveBeenCalledTimes(1);
  expect(handleAnswer.mock.calls[0][0]).toBe("Vienna");
});
