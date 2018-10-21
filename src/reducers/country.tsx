import { CountryAction } from "src/actions";
import {
  ADD_COUNTRY,
  ADD_COUNTRY_QUESTION,
  ANSWER_QUESTION
} from "../constants/actions";
import IStoreState from "../types/IStoreState";

export default function country(
  state: IStoreState,
  action: CountryAction
): IStoreState {
  switch (action.type) {
    case ADD_COUNTRY:
      return { ...state, countries: state.countries.concat([action.country]) };

    case ADD_COUNTRY_QUESTION:
      return {
        ...state,
        countryQuestions: state.countryQuestions.concat([action.question])
      };

    case ANSWER_QUESTION:
      const correct =
        (action.question.question === "capital" &&
          action.question.country.capital === action.answer) ||
        (action.question.question === "country" &&
          action.question.country.country === action.answer);
      return {
        ...state,
        answeredCountries: state.answeredCountries.concat([
          { question: action.question, correct }
        ]),
        points: state.points + (correct ? 1 : 0)
      };
  }
  return state;
}
