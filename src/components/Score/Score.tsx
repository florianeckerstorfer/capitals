import * as React from 'react';
import { connect } from 'react-redux';
import IStoreState from 'src/types/IStoreState';
import * as css from './Score.module.scss';

interface IProps {
  points: number;
  rounds: number;
}

export class Score extends React.PureComponent<IProps> {
  public render() {
    const { points, rounds } = this.props;
    return (
      <div className={css.score}>
        <span className={css.label}>Score</span>
        <span className={css.rounds}>
          {rounds} round
          {rounds !== 1 && 's'}
        </span>
        <span className={css.points}>
          {points} point
          {points !== 1 && 's'}
        </span>
      </div>
    );
  }
}

export const mapStateToProps = ({ round: { rounds } }: IStoreState) => ({
  points: rounds.reduce((sum, current) => sum + current.points, 0),
  rounds: rounds.length,
});

export default connect(mapStateToProps)(Score);
