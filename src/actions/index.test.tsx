import * as actions from "../constants/actions";
import { CAPITAL_QUESTION, COUNTRY_QUESTION } from "../constants/questions";
import { addCountry, addQuestion, answerQuestion } from "./index";

const austria = { name: "Austria", capital: "Vienna" };

const options = ["Switzerland", "Austria", "Germany", "Australia"];

test("addCountry() should return ADD_COUNTRY action", () => {
  const action = addCountry(austria.name, austria.capital);
  expect(action.type).toBe(actions.ADD_COUNTRY);
  expect(action.country.name).toBe(austria.name);
  expect(action.country.capital).toBe(austria.capital);
});

test("addQuestion() should return ADD_QUESTION action for COUNTRY_QUESTION", () => {
  const action = addQuestion(austria, options, COUNTRY_QUESTION);
  expect(action.type).toBe(actions.ADD_QUESTION);
  expect(action.question.country.name).toBe(austria.name);
  expect(action.question.country.capital).toBe(austria.capital);
  expect(action.question.type).toBe(COUNTRY_QUESTION);
});

test("addQuestion() should return ADD_QUESTION action for CAPITAL_QUESTION", () => {
  const action = addQuestion(austria, options, CAPITAL_QUESTION);
  expect(action.type).toBe(actions.ADD_QUESTION);
  expect(action.question.country.name).toBe(austria.name);
  expect(action.question.country.capital).toBe(austria.capital);
  expect(action.question.type).toBe(CAPITAL_QUESTION);
});

test("answerQuestion() should return ANSWER_QUESTION action for COUNTRY_QUESTION", () => {
  const action = answerQuestion(
    {
      country: austria,
      options: ["Switzerland", "Austria", "Germany", "Australia"],
      type: COUNTRY_QUESTION
    },
    austria.name
  );
  expect(action.type).toBe(actions.ANSWER_QUESTION);
  expect(action.question.country.name).toBe(austria.name);
  expect(action.question.country.capital).toBe(austria.capital);
  expect(action.question.type).toBe(COUNTRY_QUESTION);
  expect(action.answer).toBe(austria.name);
});

test("answerQuestion() should return ANSWER_QUESTION action for CAPITAL_QUESTION", () => {
  const action = answerQuestion(
    {
      country: austria,
      options,
      type: CAPITAL_QUESTION
    },
    austria.capital
  );
  expect(action.type).toBe(actions.ANSWER_QUESTION);
  expect(action.question.country.name).toBe(austria.name);
  expect(action.question.country.capital).toBe(austria.capital);
  expect(action.question.type).toBe(CAPITAL_QUESTION);
  expect(action.answer).toBe(austria.capital);
});
