import { shallow } from 'enzyme';
import * as React from 'react';
import { NewRound } from './NewRound';

test('NewRound should render start initial round', () => {
  const component = shallow(<NewRound round={0} />);
  expect(component.exists()).toBeTruthy();
  expect(component.hasClass('newRound')).toBeTruthy();
  expect(component.find('.introText').exists()).toBeTruthy();
  expect(component.find('Connect(NewRoundButton)').exists()).toBeTruthy();
});

test('NewRound should render start next round screen', () => {
  const component = shallow(<NewRound round={1} />);
  expect(component.exists()).toBeTruthy();
  expect(component.hasClass('newRound')).toBeTruthy();
  expect(component.find('Connect(RoundResult)').exists()).toBeTruthy();
  expect(component.find('Connect(NewRoundButton)').exists()).toBeTruthy();
});
