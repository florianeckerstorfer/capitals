import classNames from 'classnames';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { answerQuestion } from '../../actions/roundActions';
import { saveAnswer } from '../../actions/userActions';
import IAnswer from '../../types/IAnswer';
import IQuestion from '../../types/IQuestion';
import * as css from './AnswerOption.module.scss';

interface IOwnProps {
  answer: IAnswer;
  position: number;
  question: IQuestion;
  round: number;
}

interface IProps {
  onAnswer: () => void;
  onSaveAnswer: () => void;
}

interface IState {
  answered: boolean;
}

export class AnswerOption extends React.PureComponent<
  IProps & IOwnProps,
  IState
> {
  constructor(props: IProps & IOwnProps) {
    super(props);
    this.state = { answered: false };
  }

  public render() {
    const { answered } = this.state;
    const { answer, round, question, position } = this.props;
    const id = `answer-${round}-${question.id}-${position}`;
    const name = `anwser-${round}-${question.id}`;
    return (
      <label
        className={classNames(css.answerOption, {
          [css.answered]: answered,
          [css.correct]: answer.correct,
          [css.notCorrect]: !answer.correct,
        })}
        htmlFor={id}
      >
        <input
          type="radio"
          id={id}
          name={name}
          value={answer.answer}
          onChange={this.handleAnswer}
        />{' '}
        {answer.answer}
      </label>
    );
  }

  public handleAnswer = () => {
    const { onAnswer, onSaveAnswer } = this.props;
    onSaveAnswer();
    this.setState({ answered: true }, () => setTimeout(() => onAnswer(), 1000));
  };
}

export const mapDispatchToProps = (
  dispatch: Dispatch,
  ownProps: IOwnProps,
) => ({
  onAnswer: () =>
    dispatch(
      answerQuestion(ownProps.round, ownProps.question, ownProps.position),
    ),
  onSaveAnswer: () => dispatch(saveAnswer(ownProps.question, ownProps.answer)),
});

export default connect(
  null,
  mapDispatchToProps,
)(AnswerOption);
