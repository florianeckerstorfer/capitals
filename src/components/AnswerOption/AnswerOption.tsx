import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { answerQuestion } from '../../actions/roundActions';
import IAnswer from '../../types/IAnswer';
import * as css from './AnswerOption.module.scss';

interface IOwnProps {
  position: number;
  question: number;
  round: number;
}

interface IProps {
  answer: IAnswer;
  handleAnswer: (event: React.ChangeEvent) => void;
}

export const AnswerOption = ({
  answer,
  handleAnswer,
  round,
  question,
  position,
}: IProps & IOwnProps) => {
  const id = `answer-${round}-${question}-${position}`;
  const name = `anwser-${round}-${question}`;
  return (
    <label className={css.answerOption} htmlFor={id}>
      <input
        type="radio"
        id={id}
        name={name}
        value={answer.answer}
        onChange={handleAnswer}
      />{' '}
      {answer.answer}
    </label>
  );
};

export const mapDispatchToProps = (
  dispatch: Dispatch,
  ownProps: IOwnProps,
) => ({
  handleAnswer: () =>
    setTimeout(
      () =>
        dispatch(
          answerQuestion(ownProps.round, ownProps.question, ownProps.position),
        ),
      500,
    ),
});

export default connect(
  null,
  mapDispatchToProps,
)(AnswerOption);
