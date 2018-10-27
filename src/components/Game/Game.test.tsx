import { shallow } from 'enzyme';
import * as React from 'react';
import { Game } from './Game';

test('Game should render game when no round is active', () => {
  const component = shallow(<Game round={0} active={false} points={0} />);
  expect(component.exists()).toBeTruthy();
});
