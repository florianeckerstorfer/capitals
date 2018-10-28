import * as React from 'react';
import { connect } from 'react-redux';
import IStoreState from '../../types/IStoreState';
import NewRound from '../NewRound/NewRound';
import Round from '../Round/Round';
import Score from '../Score/Score';

interface IProps {
  active: boolean;
  round: number;
}

export const Game = ({ round, active }: IProps) => (
  <div>
    {active ? <Round round={round} /> : <NewRound />}
    <Score />
  </div>
);

export const mapStateToProps = ({ round: { round, rounds } }: IStoreState) => ({
  active: rounds.filter(value => value.id === round && value.active).length > 0,
  round,
});

export default connect(mapStateToProps)(Game);
