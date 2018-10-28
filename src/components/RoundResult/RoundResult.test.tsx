import { shallow } from 'enzyme';
import * as React from 'react';
import IRound from 'src/types/IRound';
import IStoreState from 'src/types/IStoreState';
import { mapStateToProps, RoundResult } from './RoundResult';

test('RoundResult should render result from last round', () => {
  const round: IRound = {
    active: false,
    currentQuestion: 0,
    id: 1,
    points: 7,
    questions: [],
  };
  const component = shallow(<RoundResult round={round} />);
  expect(component.exists()).toBeTruthy();
  expect(component.find('.points').text()).toBe('7 points');
});

test('mapStateToProps() should map state to props', () => {
  const state: IStoreState = {
    country: { countries: [] },
    round: {
      round: 1,
      rounds: [
        { id: 1, points: 7, questions: [], currentQuestion: 0, active: false },
      ],
    },
  };
  const props = mapStateToProps(state);
  expect(props.round.id).toBe(1);
  expect(props.round.points).toBe(7);
});
