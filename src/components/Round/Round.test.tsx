import { shallow } from 'enzyme';
import * as React from 'react';
import { mapStateToProps, Round } from './Round';

const round = {
  active: true,
  currentQuestion: 0,
  id: 1,
  points: 0,
  questions: [],
};

test('Round should render round', () => {
  const component = shallow(<Round round={round} />);
  expect(component.exists()).toBeTruthy();
  expect(component.find('h2').text()).toBe('Round 1');
});

test('mapStateToProps should map state to props', () => {
  const state = {
    country: { countries: [] },
    round: { round: 1, rounds: [round] },
  };
  const props = mapStateToProps(state, { round: 1 });
  expect(props.round.id).toBe(1);
});
