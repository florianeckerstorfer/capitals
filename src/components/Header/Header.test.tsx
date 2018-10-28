import { shallow } from 'enzyme';
import * as React from 'react';
import { Header } from './Header';

test('Header should render', () => {
  const component = shallow(<Header />);
  expect(component.exists());
  expect(component.find('.pageTitle').text()).toContain('Capitals');
});
