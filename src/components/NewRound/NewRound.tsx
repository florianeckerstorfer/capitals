import * as React from 'react';
import { connect } from 'react-redux';
import IStoreState from '../../types/IStoreState';
import NewRoundButton from '../NewRoundButton/NewRoundButton';
import * as css from './NewRound.module.scss';

interface IProps {
  round: number;
}

export class NewRound extends React.PureComponent<IProps> {
  public render() {
    const { round } = this.props;
    return (
      <div className={css.newRound}>
        {round === 0 && (
          <p className={css.introText}>
            Capitals is a game to learn all the capitals of the world.
          </p>
        )}
        <NewRoundButton />
      </div>
    );
  }
}

export const mapStateToProps = ({ round: { round } }: IStoreState) => ({
  round,
});

export default connect(mapStateToProps)(NewRound);
