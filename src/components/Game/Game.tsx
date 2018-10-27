import * as React from 'react';
import { connect } from 'react-redux';
import IStoreState from '../../types/IStoreState';
import NewRoundButton from '../NewRoundButton/NewRoundButton';
import Round from '../Round/Round';

interface IProps {
  active: boolean;
  round: number;
  points: number;
}

export const Game = ({ round, active, points }: IProps) => (
  <div>
    {active ? <Round round={round} /> : <NewRoundButton />}
    <div>
      Points: <span className="points">{points}</span>
    </div>
  </div>
);

export const mapStateToProps = ({ round: { round, rounds } }: IStoreState) => ({
  active: rounds.filter(value => value.id === round && value.active).length > 0,
  points: rounds.reduce((sum, current) => sum + current.points, 0),
  round,
});

export default connect(mapStateToProps)(Game);
