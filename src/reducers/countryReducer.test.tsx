import { addCountry, addQuestion, answerQuestion } from "../actions";
import { CAPITAL_QUESTION, COUNTRY_QUESTION } from "../constants/questions";
import ICountry from "../types/ICountry";
import IStoreState from "../types/IStoreState";
import countryReducer from "./countryReducer";

const options = ["Switzerland", "Austria", "Germany", "Australia"];

const initialState: IStoreState = {
  answers: [],
  countries: [],
  points: 0,
  questions: []
};

const austria: ICountry = { name: "Austria", capital: "Vienna" };

test("country() should reduce ADD_COUNTRY action", () => {
  const state = countryReducer(initialState, addCountry("Austria", "Vienna"));
  expect(state.countries.length).toBe(1);
  expect(state.countries[0].name).toBe("Austria");
  expect(state.countries[0].capital).toBe("Vienna");
});

test("country() should reduce ADD_QUESTION action with COUNTRY_QUESTION", () => {
  const state = countryReducer(
    initialState,
    addQuestion(austria, options, COUNTRY_QUESTION)
  );
  expect(state.questions.length).toBe(1);
  expect(state.questions[0].country.name).toBe("Austria");
  expect(state.questions[0].country.capital).toBe("Vienna");
  expect(state.questions[0].type).toBe(COUNTRY_QUESTION);
});

test("country() should reduce ADD_QUESTION action with CAPITAL_QUESTION", () => {
  const state = countryReducer(
    initialState,
    addQuestion(austria, options, CAPITAL_QUESTION)
  );
  expect(state.questions.length).toBe(1);
  expect(state.questions[0].country.name).toBe("Austria");
  expect(state.questions[0].country.capital).toBe("Vienna");
  expect(state.questions[0].type).toBe(CAPITAL_QUESTION);
});

test("country() should reduce ANSWER_QUESTION action when question is capital and answer is correct", () => {
  const state = countryReducer(
    initialState,
    answerQuestion(
      { country: austria, options, type: CAPITAL_QUESTION },
      "Vienna"
    )
  );
  expect(state.answers.length).toBe(1);
  expect(state.answers[0].correct).toBeTruthy();
  expect(state.points).toBe(1);
});

test("country() should reduce ANSWER_QUESTION action when question is capital and answer is not correct", () => {
  const state = countryReducer(
    initialState,
    answerQuestion(
      { country: austria, options, type: CAPITAL_QUESTION },
      "Berlin"
    )
  );
  expect(state.answers.length).toBe(1);
  expect(state.answers[0].correct).toBeFalsy();
  expect(state.points).toBe(0);
});

test("country() should reduce ANSWER_QUESTION action when question is country and answer is correct", () => {
  const state = countryReducer(
    initialState,
    answerQuestion(
      { country: austria, options, type: COUNTRY_QUESTION },
      "Austria"
    )
  );
  expect(state.answers.length).toBe(1);
  expect(state.answers[0].correct).toBeTruthy();
  expect(state.points).toBe(1);
});

test("country() should reduce ANSWER_QUESTION action when question is country and answer is not correct", () => {
  const state = countryReducer(
    initialState,
    answerQuestion(
      { country: austria, options, type: COUNTRY_QUESTION },
      "Germany"
    )
  );
  expect(state.answers.length).toBe(1);
  expect(state.answers[0].correct).toBeFalsy();
  expect(state.points).toBe(0);
});
