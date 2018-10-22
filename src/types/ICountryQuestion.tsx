import { COUNTRY_QUESTION } from "../constants/questions";
import IQuestion from "./IQuestion";

interface ICountryQuestion extends IQuestion {
  type: COUNTRY_QUESTION;
}

export default ICountryQuestion;
