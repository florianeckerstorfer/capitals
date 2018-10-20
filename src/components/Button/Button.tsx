import * as React from "react";

interface IProps {
  children: string;
  onClick: () => void;
}

const Button = ({ children, onClick }: IProps) => (
  <button onClick={onClick}>{children}</button>
);

export default Button;
