import IQuestion from "./IQuestion";

interface IQuestionAnswer {
  question: IQuestion;
  answered: boolean;
  correct?: boolean;
}

export default IQuestionAnswer;
