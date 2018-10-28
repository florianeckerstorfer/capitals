import * as React from 'react';
import { connect } from 'react-redux';
import IStoreState from '../../types/IStoreState';
import * as css from './Progress.module.scss';

interface IProps {
  correctCountries: number;
  countries: number;
}

export class Progress extends React.PureComponent<IProps> {
  public render() {
    const { correctCountries, countries } = this.props;
    const percent = (100 / countries) * correctCountries;
    return (
      <div className={css.progress}>
        <div className={css.progressBar} style={{ width: `${percent}%` }} />
        <div className={css.label}>
          {correctCountries} / {countries} countries
        </div>
      </div>
    );
  }
}

export const mapStateToProps = ({
  country: { countries },
  user: { correctCountries },
}: IStoreState) => ({
  correctCountries: correctCountries.length,
  countries: countries.length,
});

export default connect(mapStateToProps)(Progress);
