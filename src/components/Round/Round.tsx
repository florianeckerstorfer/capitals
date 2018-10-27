import * as React from 'react';
import { connect } from 'react-redux';
import IRound from '../../types/IRound';
import IStoreState from '../../types/IStoreState';
import Question from '../Question/Question';

interface IProps {
  round: IRound;
}

interface IOwnProps {
  round: number;
}

export class Round extends React.PureComponent<IProps> {
  public render() {
    const { round } = this.props;
    return (
      <div>
        <h2>Round {round.id}</h2>
        <Question round={round.id} question={round.currentQuestion} />
      </div>
    );
  }
}

export const mapStateToProps = (
  { round: { rounds } }: IStoreState,
  ownProps: IOwnProps,
) => ({
  round: rounds.filter((value: IRound) => value.id === ownProps.round)[0],
});

export default connect(mapStateToProps)(Round);
