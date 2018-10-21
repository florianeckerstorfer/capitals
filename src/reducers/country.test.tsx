import { addCountry, addCountryQuestion, answerQuestion } from "../actions";
import ICountry from "../types/ICountry";
import IStoreState from "../types/IStoreState";
import country from "./country";

const initialState: IStoreState = {
  answeredCountries: [],
  countries: [],
  countryQuestions: [],
  points: 0
};

test("country() should reduce ADD_COUNTRY action", () => {
  const state = country(initialState, addCountry("Austria", "Vienna"));
  expect(state.countries.length).toBe(1);
  expect(state.countries[0].country).toBe("Austria");
  expect(state.countries[0].capital).toBe("Vienna");
});

test("country() should reduce ADD_COUNTRY_QUESTION action", () => {
  const state = country(
    initialState,
    addCountryQuestion({ country: "Austria", capital: "Vienna" }, "country")
  );
  expect(state.countryQuestions.length).toBe(1);
  expect(state.countryQuestions[0].country.country).toBe("Austria");
  expect(state.countryQuestions[0].country.capital).toBe("Vienna");
  expect(state.countryQuestions[0].question).toBe("country");
});

test("country() should reduce ANSWER_QUESTION action when question is capital and answer is correct", () => {
  const austria: ICountry = { country: "Austria", capital: "Vienna" };
  const state = country(
    initialState,
    answerQuestion({ country: austria, question: "capital" }, "Vienna")
  );
  expect(state.answeredCountries.length).toBe(1);
  expect(state.answeredCountries[0].correct).toBeTruthy();
  expect(state.points).toBe(1);
});

test("country() should reduce ANSWER_QUESTION action when question is capital and answer is not correct", () => {
  const austria: ICountry = { country: "Austria", capital: "Vienna" };
  const state = country(
    initialState,
    answerQuestion({ country: austria, question: "capital" }, "Berlin")
  );
  expect(state.answeredCountries.length).toBe(1);
  expect(state.answeredCountries[0].correct).toBeFalsy();
  expect(state.points).toBe(0);
});

test("country() should reduce ANSWER_QUESTION action when question is country and answer is correct", () => {
  const austria: ICountry = { country: "Austria", capital: "Vienna" };
  const state = country(
    initialState,
    answerQuestion({ country: austria, question: "country" }, "Austria")
  );
  expect(state.answeredCountries.length).toBe(1);
  expect(state.answeredCountries[0].correct).toBeTruthy();
  expect(state.points).toBe(1);
});

test("country() should reduce ANSWER_QUESTION action when question is country and answer is not correct", () => {
  const austria: ICountry = { country: "Austria", capital: "Vienna" };
  const state = country(
    initialState,
    answerQuestion({ country: austria, question: "country" }, "Germany")
  );
  expect(state.answeredCountries.length).toBe(1);
  expect(state.answeredCountries[0].correct).toBeFalsy();
  expect(state.points).toBe(0);
});
