import * as React from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import IStoreState from 'src/types/IStoreState';
import { newRound, RoundAction } from '../../actions/roundActions';
import Button from '../Button/Button';

interface IProps {
  onClick: () => void;
}

type dispatchFunc = ThunkDispatch<IStoreState, {}, RoundAction>;

export const NewRoundButton = ({ onClick }: IProps) => (
  <Button onClick={onClick}>Start Round</Button>
);

export const mapDispatchToProps = (dispatch: dispatchFunc) => ({
  onClick: () => dispatch(newRound()),
});

export default connect(
  null,
  mapDispatchToProps,
)(NewRoundButton);
