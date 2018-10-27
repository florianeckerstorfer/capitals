import { shallow } from 'enzyme';
import * as React from 'react';
import { NewRound } from './NewRound';

test('NewRound should render', () => {
  const component = shallow(<NewRound />);
  expect(component.exists()).toBeTruthy();
  expect(component.hasClass('newRound')).toBeTruthy();
});
