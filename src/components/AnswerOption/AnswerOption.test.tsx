import { shallow } from 'enzyme';
import * as React from 'react';
import { ANSWER_QUESTION } from '../../constants/actions';
import { AnswerOption, mapDispatchToProps } from './AnswerOption';

test('AnswerOption should render correct answer option', () => {
  const answer = { answer: 'Vienna', correct: true };
  const handleAnswer = jest.fn();
  const component = shallow(
    <AnswerOption
      answer={answer}
      onAnswer={handleAnswer}
      position={0}
      question={0}
      round={1}
    />,
  );
  expect(component.exists()).toBe(true);
  const label = component.find('label');
  expect(label.text()).toContain(answer.answer);
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
      position={0}
      question={0}
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
  const answer = { answer: 'Vienna', correct: true };
  const handleAnswer = jest.fn();
  const component = shallow(
    <AnswerOption
      answer={answer}
      onAnswer={handleAnswer}
      position={0}
      question={0}
      round={1}
    />,
  );
  expect(component.find('label').hasClass('answered')).toBeFalsy();
  const instance: AnswerOption = component.instance() as AnswerOption;
  instance.handleAnswer();
  expect(component.find('label').hasClass('answered')).toBeTruthy();
});

test('mapDispatchToProps() should map dispatch to props', done => {
  const dispatch = jest.fn();
  const props = mapDispatchToProps(dispatch, {
    position: 0,
    question: 0,
    round: 1,
  });
  props.onAnswer();
  setTimeout(() => {
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls[0][0].type).toBe(ANSWER_QUESTION);
    expect(dispatch.mock.calls[0][0].round).toBe(1);
    expect(dispatch.mock.calls[0][0].question).toBe(0);
    expect(dispatch.mock.calls[0][0].answer).toBe(0);
    done();
  }, 1000);
});
