import { shallow } from 'enzyme';
import * as React from 'react';
import initialState from '../../constants/initialState';
import { mapStateToProps, Question } from './Question';

test('Question should render question', () => {
  const question = {
    answers: [{ answer: 'Vienna', correct: true }],
    id: 0,
    question: 'Austria',
  };
  const component = shallow(
    <Question question={question} round={1} questionIndex={0} />,
  );
  expect(component.exists()).toBeTruthy();
  expect(component.find('.questionText').text()).toBe(
    'What is the capital of Austria?',
  );
});

test('mapStateToProps() should map state to props', () => {
  const question = { question: 'Austria', id: 0, answers: [] };
  const state = {
    ...initialState,
    round: {
      round: 1,
      rounds: [
        {
          active: true,
          currentQuestion: 0,
          id: 1,
          points: 0,
          questions: [question],
        },
      ],
    },
  };
  const props = mapStateToProps(state, { round: 1, question: 0 });
  expect(props.questionIndex).toBe(0);
  expect(props.question).toBe(question);
});
