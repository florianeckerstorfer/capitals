import * as actions from "../constants/actions";
import { addCountry, addCountryQuestion, answerQuestion } from "./index";

test("addCountry() should return ADD_COUNTRY action", () => {
  const action = addCountry("Austria", "Vienna");
  expect(action.type).toBe(actions.ADD_COUNTRY);
  expect(action.country.country).toBe("Austria");
  expect(action.country.capital).toBe("Vienna");
});

test("addCountryQuestion() should return ADD_COUNTRY_QUESTION action", () => {
  const action = addCountryQuestion(
    { country: "Austria", capital: "Vienna" },
    "country"
  );
  expect(action.type).toBe(actions.ADD_COUNTRY_QUESTION);
  expect(action.question.country.country).toBe("Austria");
  expect(action.question.country.capital).toBe("Vienna");
  expect(action.question.question).toBe("country");
});

test("answerQuestion() should return ANSWER_QUESTION action", () => {
  const action = answerQuestion(
    { country: { country: "Austria", capital: "Vienna" }, question: "capital" },
    "Vienna"
  );
  expect(action.type).toBe(actions.ANSWER_QUESTION);
  expect(action.question.country.country).toBe("Austria");
  expect(action.question.country.capital).toBe("Vienna");
  expect(action.question.question).toBe("capital");
  expect(action.answer).toBe("Vienna");
});
