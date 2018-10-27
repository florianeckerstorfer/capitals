import {
  IAnswerQuestion,
  INewRoundAction,
  RoundAction,
} from '../actions/roundActions';
import { ANSWER_QUESTION, NEW_ROUND } from '../constants/actions';
import IRoundState from '../types/IRoundState';

export const initialState: IRoundState = {
  round: 0,
  rounds: [],
};

const handleNewRound = (
  state: IRoundState,
  action: INewRoundAction,
): IRoundState => {
  const id = state.round + 1;
  return {
    ...state,
    round: id,
    rounds: state.rounds.concat([
      {
        active: true,
        currentQuestion: 0,
        id,
        points: 0,
        questions: action.questions,
      },
    ]),
  };
};

const handleAnswerQuestion = (
  state: IRoundState,
  action: IAnswerQuestion,
): IRoundState => {
  const answer = state.rounds.filter(round => round.id === action.round)[0]
    .questions[action.question].answers[action.answer];
  const rounds = state.rounds.map(round => {
    if (round.id === action.round) {
      return {
        ...round,
        active: round.currentQuestion + 1 < round.questions.length,
        currentQuestion:
          round.currentQuestion + 1 < round.questions.length
            ? round.currentQuestion + 1
            : round.currentQuestion,
        points: round.points + (answer.correct ? 1 : 0),
      };
    }
    return round;
  });
  return { ...state, rounds: [...rounds] };
};

const roundReducer = (
  state: IRoundState = initialState,
  action: RoundAction | { type: null } = { type: null },
): IRoundState => {
  switch (action.type) {
    case NEW_ROUND:
      return handleNewRound(state, action);

    case ANSWER_QUESTION:
      return handleAnswerQuestion(state, action);
  }
  return state;
};

export default roundReducer;
