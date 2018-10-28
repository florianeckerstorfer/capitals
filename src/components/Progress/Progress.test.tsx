import { shallow } from 'enzyme';
import * as React from 'react';
import initialState from '../../constants/initialState';
import { mapStateToProps, Progress } from './Progress';

test('Progress should render when no correct countries', () => {
  const component = shallow(<Progress correctCountries={0} countries={10} />);
  expect(component.exists()).toBeTruthy();
  expect(component.hasClass('progress')).toBeTruthy();
  expect(component.text()).toBe('0 / 10 countries');
});

test('mapStateToProps() should map state to props', () => {
  const props = mapStateToProps({
    ...initialState,
    country: {
      countries: [
        { name: 'Austria', capital: 'Vienna', continents: ['Europe'] },
        { name: 'Costa Rica', capital: 'San Jose', continents: ['America'] },
      ],
    },
    user: {
      correctCountries: ['Austria'],
      incorrectCountries: [],
    },
  });
  expect(props.countries).toBe(2);
  expect(props.correctCountries).toBe(1);
});
