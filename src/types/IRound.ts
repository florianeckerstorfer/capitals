import IQuestion from './IQuestion';

interface IRound {
  active: boolean;
  currentQuestion: number;
  id: number;
  points: number;
  questions: IQuestion[];
}

export default IRound;
