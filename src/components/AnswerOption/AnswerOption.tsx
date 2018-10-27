import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { answerQuestion } from '../../actions/roundActions';
import IAnswer from '../../types/IAnswer';

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
    <label htmlFor={id}>
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
    dispatch(
      answerQuestion(ownProps.round, ownProps.question, ownProps.position),
    ),
});

export default connect(
  null,
  mapDispatchToProps,
)(AnswerOption);
