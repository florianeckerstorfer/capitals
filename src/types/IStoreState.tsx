/* istanbul ignore file */

import ICountryState from './IContryState';
import IRoundState from './IRoundState';
import IUserState from './IUserState';

interface IStoreState {
  country: ICountryState;
  round: IRoundState;
  user: IUserState;
}

export default IStoreState;
