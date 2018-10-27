import * as React from 'react';
import * as css from './Button.module.scss';

interface IProps {
  children: string;
  onClick: () => void;
}

const Button = ({ children, onClick }: IProps) => (
  <button className={css.button} onClick={onClick}>
    {children}
  </button>
);

export default Button;
