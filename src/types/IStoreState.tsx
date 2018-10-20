import IQuestion from "./IQuestion";
import IQuestionAnswer from "./IQuestionAnswer";

interface IStoreState {
  answeredQuestions: IQuestionAnswer[];
  points: number;
  questions: IQuestion[];
}

export default IStoreState;
