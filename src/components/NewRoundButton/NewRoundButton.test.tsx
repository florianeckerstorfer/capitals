import { shallow } from 'enzyme';
import * as React from 'react';
import { mapDispatchToProps, NewRoundButton } from './NewRoundButton';

test('NewRoundButton should render button to start new round', () => {
  const handleClick = jest.fn();
  const component = shallow(<NewRoundButton onClick={handleClick} />);
  expect(component.exists()).toBeTruthy();
  expect(component.dive().text()).toBe('New Round');
});

test('mapDispatchToProps() should map dispatch to props', () => {
  const dispatch = jest.fn();
  const props = mapDispatchToProps(dispatch);
  props.onClick();
  expect(dispatch).toHaveBeenCalledTimes(1);
});
