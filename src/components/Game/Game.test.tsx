import { shallow } from 'enzyme';
import * as React from 'react';
import IStoreState from 'src/types/IStoreState';
import { Game, mapStateToProps } from './Game';

test('Game should render game when no round is active', () => {
  const component = shallow(<Game round={0} active={false} points={7} />);
  expect(component.exists()).toBeTruthy();
  expect(component.childAt(0).name()).toBe('Connect(NewRoundButton)');
  expect(component.find('.points').text()).toBe('7');
});

test('Game should render game when round is active', () => {
  const component = shallow(<Game round={1} active={true} points={5} />);
  expect(component.exists()).toBeTruthy();
  expect(component.childAt(0).name()).toBe('Connect(Round)');
  expect(component.childAt(0).prop('round')).toBe(1);
  expect(component.find('.points').text()).toBe('5');
});

test('mapStateToProps() should map state to props with active round', () => {
  const state: IStoreState = {
    country: { countries: [] },
    round: {
      round: 3,
      rounds: [
        { id: 1, active: false, points: 7, currentQuestion: 0, questions: [] },
        { id: 2, active: false, points: 8, currentQuestion: 0, questions: [] },
        { id: 3, active: true, points: 3, currentQuestion: 0, questions: [] },
      ],
    },
  };
  const props = mapStateToProps(state);
  expect(props.active).toBe(true);
  expect(props.points).toBe(18);
});

test('mapStateToProps() should map state to props with no active round', () => {
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
  expect(props.active).toBe(false);
  expect(props.points).toBe(21);
});
