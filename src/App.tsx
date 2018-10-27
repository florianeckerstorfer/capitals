import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ISetCountries, setCountries } from './actions/countryActions';
import './App.css';
import Game from './components/Game/Game';
import countryData from './data/countries';
import ICountry from './types/ICountry';

interface IProps {
  setCountries: (countries: ICountry[]) => void;
}

export class App extends React.PureComponent<IProps> {
  public componentDidMount() {
    this.props.setCountries(countryData);
  }
  public render() {
    return (
      <div className="app">
        <h1>Capital Quiz</h1>
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
