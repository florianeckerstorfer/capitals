import * as React from 'react';
import { connect } from 'react-redux';
import IRound from 'src/types/IRound';
import IStoreState from 'src/types/IStoreState';
import * as css from './RoundResult.module.scss';

interface IProps {
  round: IRound;
}

export class RoundResult extends React.PureComponent<IProps> {
  public render() {
    const { round } = this.props;
    return (
      <div>
        <p>
          You have received{' '}
          <span className={css.points}>{round.points} points</span> in the last
          round.
        </p>
        <p>Are you ready for the next one?</p>
      </div>
    );
  }
}

export const mapStateToProps = ({ round: { round, rounds } }: IStoreState) => ({
  round: rounds.filter(value => value.id === round)[0],
});

export default connect(mapStateToProps)(RoundResult);
