import { shallow } from 'enzyme';
import * as React from 'react';
import { ANSWER_QUESTION } from '../../constants/actions';
import { AnswerOption, mapDispatchToProps } from './AnswerOption';

test('AnswerOption should render answer option', () => {
  const answer = { answer: 'Vienna', correct: true };
  const handleAnswer = jest.fn();
  const component = shallow(
    <AnswerOption
      answer={answer}
      handleAnswer={handleAnswer}
      position={0}
      question={0}
      round={1}
    />,
  );
  expect(component.exists()).toBe(true);
  expect(component.find('label').text()).toContain(answer.answer);
});

test('mapDispatchToProps() should map dispatch to props', () => {
  const dispatch = jest.fn();
  const props = mapDispatchToProps(dispatch, {
    position: 0,
    question: 0,
    round: 1,
  });
  props.handleAnswer();
  expect(dispatch).toHaveBeenCalledTimes(1);
  expect(dispatch.mock.calls[0][0].type).toBe(ANSWER_QUESTION);
  expect(dispatch.mock.calls[0][0].round).toBe(1);
  expect(dispatch.mock.calls[0][0].question).toBe(0);
  expect(dispatch.mock.calls[0][0].answer).toBe(0);
});
