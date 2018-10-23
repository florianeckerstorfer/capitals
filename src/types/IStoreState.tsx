import IAnswer from "./IAnswer";
import ICountry from "./ICountry";
import IQuestion from "./IQuestion";

interface IStoreState {
  answers: IAnswer[];
  points: number;
  countries: ICountry[];
  questions: IQuestion[];
}

export default IStoreState;
