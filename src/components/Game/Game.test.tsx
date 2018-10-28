import { shallow } from 'enzyme';
import * as React from 'react';
import initialState from '../../constants/initialState';
import IStoreState from '../../types/IStoreState';
import { Game, mapStateToProps } from './Game';

test('Game should render game when no round is active', () => {
  const component = shallow(<Game round={0} active={false} />);
  expect(component.exists()).toBeTruthy();
  expect(component.childAt(0).name()).toBe('Connect(NewRound)');
  expect(component.find('Connect(Score)').exists()).toBeTruthy();
});

test('Game should render game when round is active', () => {
  const component = shallow(<Game round={1} active={true} />);
  expect(component.exists()).toBeTruthy();
  expect(component.childAt(0).name()).toBe('Connect(Round)');
  expect(component.childAt(0).prop('round')).toBe(1);
  expect(component.find('Connect(Score)').exists()).toBeTruthy();
});

test('mapStateToProps() should map state to props with active round', () => {
  const state: IStoreState = {
    ...initialState,
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
});

test('mapStateToProps() should map state to props with no active round', () => {
  const state: IStoreState = {
    ...initialState,
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
});
