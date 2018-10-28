import { ISaveAnswer, UserAction } from '../actions/userActions';
import { SAVE_ANSWER } from '../constants/actions';
import IUserState from '../types/IUserState';

export const initialState: IUserState = {
  correctCountries: [],
  incorrectCountries: [],
};

const handleSaveAnswerCorrect = (
  state: IUserState,
  action: ISaveAnswer,
): IUserState => ({
  ...state,
  correctCountries:
    state.correctCountries.indexOf(action.question.question) >= 0
      ? state.correctCountries
      : state.correctCountries.concat([action.question.question]),
  incorrectCountries: state.incorrectCountries.filter(
    country => country !== action.question.question,
  ),
});

const handleSaveAnswerIncorrect = (
  state: IUserState,
  action: ISaveAnswer,
): IUserState => ({
  ...state,
  correctCountries: state.correctCountries.filter(
    country => country !== action.question.question,
  ),
  incorrectCountries:
    state.incorrectCountries.indexOf(action.question.question) >= 0
      ? state.incorrectCountries
      : state.incorrectCountries.concat([action.question.question]),
});

const userReducer = (
  state: IUserState = initialState,
  action: UserAction | { type: null } = { type: null },
): IUserState => {
  switch (action.type) {
    case SAVE_ANSWER:
      if (action.answer.correct) {
        return handleSaveAnswerCorrect(state, action);
      }
      return handleSaveAnswerIncorrect(state, action);
  }
  return state;
};

export default userReducer;
