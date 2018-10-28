import { shallow } from 'enzyme';
import * as React from 'react';
import IStoreState from '../../types/IStoreState';
import { mapStateToProps, Score } from './Score';

test('Score should render total points and total rounds', () => {
  const component = shallow(<Score points={25} rounds={3} />);
  expect(component.exists()).toBeTruthy();
  expect(component.hasClass('score')).toBeTruthy();
  expect(component.find('.points').text()).toBe('25 points');
  expect(component.find('.rounds').text()).toBe('3 rounds');
});

test('Score should render correctly if total points is 1 and total rounds is 1', () => {
  const component = shallow(<Score points={1} rounds={1} />);
  expect(component.exists()).toBeTruthy();
  expect(component.hasClass('score')).toBeTruthy();
  expect(component.find('.points').text()).toBe('1 point');
  expect(component.find('.rounds').text()).toBe('1 round');
});

test('Score should render correctly if total points is 0 and total rounds is 0', () => {
  const component = shallow(<Score points={0} rounds={0} />);
  expect(component.exists()).toBeTruthy();
  expect(component.hasClass('score')).toBeTruthy();
  expect(component.find('.points').text()).toBe('0 points');
  expect(component.find('.rounds').text()).toBe('0 rounds');
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
  expect(props.rounds).toBe(3);
});
