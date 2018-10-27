/* istanbul ignore file */

import ICountryState from './IContryState';
import IRoundState from './IRoundState';

interface IStoreState {
  country: ICountryState;
  round: IRoundState;
}

export default IStoreState;
