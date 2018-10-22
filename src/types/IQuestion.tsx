import { QUESTION_TYPE } from "../constants/questions";
import ICountry from "./ICountry";

interface IQuestion {
  country: ICountry;
  options: string[];
  type: QUESTION_TYPE;
}

export default IQuestion;
