import { shallow } from 'enzyme';
import * as React from 'react';
import IStoreState from '../../types/IStoreState';
import { mapStateToProps, Score } from './Score';

test('Score should render total points', () => {
  const component = shallow(<Score points={25} />);
  expect(component.exists()).toBeTruthy();
  expect(component.hasClass('score')).toBeTruthy();
  expect(component.find('.points').text()).toBe('25 points');
});

test('mapStateToProps() should map state to props', () => {
  const state: IStoreState = {
    country: { countries: [] },
    round: {
      round: 3,
      rounds: [
        { id: 1, active: false, points: 7, currentQuestion: 0, questions: [] },
        { id: 2, active: false, points: 8, currentQuestion: 0, questions: [] },
        { id: 3, active: false, points: 6, currentQuestion: 0, questions: [] },
      ],
    },
  };
  const props = mapStateToProps(state);
  expect(props.points).toBe(21);
});
