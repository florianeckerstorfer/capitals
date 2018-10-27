import * as React from 'react';
import { connect } from 'react-redux';
import IQuestion from '../../types/IQuestion';
import IRound from '../../types/IRound';
import IStoreState from '../../types/IStoreState';
import AnswerOption from '../AnswerOption/AnswerOption';
import * as css from './Question.module.scss';

interface IProps {
  question: IQuestion;
  round: number;
  questionIndex: number;
}

interface IOwnProps {
  round: number;
  question: number;
}

export const Question = ({ question, round, questionIndex }: IProps) => (
  <div className={css.question}>
    <div className={css.questionText}>
      What is the capital of {question.question}?
    </div>
    <ul className={css.answers}>
      {question.answers.map((answer, position) => (
        <li key={answer.answer} className={css.answer}>
          <AnswerOption
            answer={answer}
            round={round}
            question={questionIndex}
            position={position}
          />
        </li>
      ))}
    </ul>
  </div>
);

export const mapStateToProps = (
  { round: { rounds } }: IStoreState,
  { round, question }: IOwnProps,
) => ({
  question: rounds.filter((value: IRound) => value.id === round)[0].questions[
    question
  ],
  questionIndex: question,
});

export default connect(mapStateToProps)(Question);
