import * as React from 'react';
import * as css from './Header.module.scss';

export const Header = () => (
  <header className={css.header}>
    <div className={css.pageTitle}>Capital</div>
  </header>
);

export default Header;
