/* istanbul ignore file */

import IAnswer from './IAnswer';

interface IQuestion {
  id: number;
  question: string;
  answers: IAnswer[];
}

export default IQuestion;
