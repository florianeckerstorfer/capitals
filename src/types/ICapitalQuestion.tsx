import { CAPITAL_QUESTION } from "../constants/questions";
import IQuestion from "./IQuestion";

interface ICapitalQuestion extends IQuestion {
  type: CAPITAL_QUESTION;
}

export default ICapitalQuestion;
