import { INewRoundAction, RoundAction } from '../actions/roundActions';
import { NEW_ROUND } from '../constants/actions';
import IRoundState from '../types/IRoundState';

export const initialState: IRoundState = {
  round: 0,
  rounds: [],
};

const handleNewRound = (state: IRoundState, action: INewRoundAction) => {
  const id = state.round + 1;
  return {
    ...state,
    round: id,
    rounds: state.rounds.concat([{ id, questions: action.questions }]),
  };
};

const actionMap = {
  [NEW_ROUND]: handleNewRound,
};

const roundReducer = (
  state: IRoundState = initialState,
  action: RoundAction,
): IRoundState => {
  return actionMap[action.type] ? actionMap[action.type](state, action) : state;
};

export default roundReducer;
