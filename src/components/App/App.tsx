import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ISetCountries, setCountries } from '../../actions/countryActions';
import countryData from '../../data/countries';
import ICountry from '../../types/ICountry';
import Game from '../Game/Game';
import Header from '../Header/Header';
import * as css from './App.module.scss';

interface IProps {
  setCountries: (countries: ICountry[]) => void;
}

export class App extends React.PureComponent<IProps> {
  public componentDidMount() {
    this.props.setCountries(countryData);
  }
  public render() {
    return (
      <div className={css.app}>
        <Header />
        <Game />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<ISetCountries>) => ({
  setCountries: (countries: ICountry[]) => dispatch(setCountries(countries)),
});

export default connect(
  null,
  mapDispatchToProps,
)(App);
