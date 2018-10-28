import { shallow } from 'enzyme';
import * as React from 'react';
import IQuestion from 'src/types/IQuestion';
import { ANSWER_QUESTION, SAVE_ANSWER } from '../../constants/actions';
import { AnswerOption, mapDispatchToProps } from './AnswerOption';

const question: IQuestion = {
  answers: [],
  id: 0,
  question: 'Austria',
};

const correctAnswer = { answer: 'Vienna', correct: true };

test('AnswerOption should render correct answer option', () => {
  const handleAnswer = jest.fn();
  const component = shallow(
    <AnswerOption
      answer={correctAnswer}
      onAnswer={handleAnswer}
      onSaveAnswer={jest.fn()}
      position={0}
      question={question}
      round={1}
    />,
  );
  expect(component.exists()).toBe(true);
  const label = component.find('label');
  expect(label.text()).toContain(correctAnswer.answer);
  expect(label.hasClass('correct')).toBeTruthy();
  expect(label.hasClass('notCorrect')).toBeFalsy();
});

test('AnswerOption should render incorrect answer option', () => {
  const answer = { answer: 'Vienna', correct: false };
  const handleAnswer = jest.fn();
  const component = shallow(
    <AnswerOption
      answer={answer}
      onAnswer={handleAnswer}
      onSaveAnswer={jest.fn()}
      position={0}
      question={question}
      round={1}
    />,
  );
  expect(component.exists()).toBe(true);
  const label = component.find('label');
  expect(label.text()).toContain(answer.answer);
  expect(label.hasClass('correct')).toBeFalsy();
  expect(label.hasClass('notCorrect')).toBeTruthy();
});

test('AnswerOption should handle user selecting answer', () => {
  const handleAnswer = jest.fn();
  const component = shallow(
    <AnswerOption
      answer={correctAnswer}
      onAnswer={handleAnswer}
      onSaveAnswer={jest.fn()}
      position={0}
      question={question}
      round={1}
    />,
  );
  expect(component.find('label').hasClass('answered')).toBeFalsy();
  const instance: AnswerOption = component.instance() as AnswerOption;
  instance.handleAnswer();
  expect(component.find('label').hasClass('answered')).toBeTruthy();
});

test('mapDispatchToProps() should map onAnswer() to props', () => {
  const dispatch = jest.fn();
  const props = mapDispatchToProps(dispatch, {
    answer: correctAnswer,
    position: 0,
    question,
    round: 1,
  });
  props.onAnswer();
  expect(dispatch).toHaveBeenCalledTimes(1);
  expect(dispatch.mock.calls[0][0].type).toBe(ANSWER_QUESTION);
  expect(dispatch.mock.calls[0][0].round).toBe(1);
  expect(dispatch.mock.calls[0][0].question.id).toBe(0);
  expect(dispatch.mock.calls[0][0].answer).toBe(0);
});

test('mapDispatchToProps() should map saveAnswer() to props', () => {
  const dispatch = jest.fn();
  const props = mapDispatchToProps(dispatch, {
    answer: correctAnswer,
    position: 0,
    question,
    round: 1,
  });
  props.onSaveAnswer();
  expect(dispatch).toHaveBeenCalledTimes(1);
  expect(dispatch.mock.calls[0][0].type).toBe(SAVE_ANSWER);
  expect(dispatch.mock.calls[0][0].question).toBe(question);
  expect(dispatch.mock.calls[0][0].answer).toBe(correctAnswer);
});
