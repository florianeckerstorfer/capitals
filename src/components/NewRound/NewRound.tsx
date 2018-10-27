import * as React from 'react';
import NewRoundButton from '../NewRoundButton/NewRoundButton';
import * as css from './NewRound.module.scss';

export class NewRound extends React.PureComponent {
  public render() {
    return (
      <div className={css.newRound}>
        <NewRoundButton />
      </div>
    );
  }
}

export default NewRound;
