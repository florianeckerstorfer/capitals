import { Dispatch } from 'redux';
import * as constants from '../constants/actions';
import createQuestions from '../lib/createQuestions';
import IQuestion from '../types/IQuestion';
import IStoreState from '../types/IStoreState';

export interface INewRoundAction {
  questions: IQuestion[];
  type: constants.NEW_ROUND;
}

export type RoundAction = INewRoundAction;

export const newRound = (): ((
  dispatch: Dispatch,
  getState: () => IStoreState,
) => INewRoundAction) => {
  return (dispatch: Dispatch, getState: () => IStoreState): INewRoundAction => {
    const countries = getState().country.countries;
    return {
      questions: createQuestions(countries),
      type: constants.NEW_ROUND,
    };
  };
};
