import { CountryAction } from "../actions";
import {
  ADD_COUNTRY,
  ADD_QUESTION,
  ANSWER_QUESTION
} from "../constants/actions";
import { CAPITAL_QUESTION, COUNTRY_QUESTION } from "../constants/questions";
import IStoreState from "../types/IStoreState";

export default function country(
  state: IStoreState,
  action: CountryAction
): IStoreState {
  switch (action.type) {
    case ADD_COUNTRY:
      return { ...state, countries: state.countries.concat([action.country]) };

    case ADD_QUESTION:
      return {
        ...state,
        questions: state.questions.concat([action.question])
      };

    case ANSWER_QUESTION:
      const correct =
        (action.question.type === CAPITAL_QUESTION &&
          action.question.country.capital === action.answer) ||
        (action.question.type === COUNTRY_QUESTION &&
          action.question.country.name === action.answer);
      return {
        ...state,
        answers: state.answers.concat([{ question: action.question, correct }]),
        points: state.points + (correct ? 1 : 0)
      };
  }
  return state;
}
