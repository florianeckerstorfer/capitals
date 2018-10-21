import ICountry from "./ICountry";
import Question from "./Question";

interface ICountryQuestion {
  country: ICountry;
  question: Question;
}

export default ICountryQuestion;
