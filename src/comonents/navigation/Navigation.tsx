import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';
import LOGO from  '../../assets/logo.png';

interface Props {
  children?: React.ReactNode;
}

const Navigation: FC<Props> = () => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionBody}>
        <div className={styles.logoWrapper}><img className={styles.log} src={LOGO} alt=""/></div>
        <nav className={styles.nav}>
          <NavLink
            className={styles.item}
            exact
            activeClassName={styles.active}
            to="/simple-blog"
          >
            Home
          </NavLink>

          <NavLink
            className={styles.item}
            activeClassName={styles.active}
            to="/simple-blog/about"
          >
            About
          </NavLink>
        </nav>
      </div>
    </section>
  );
};
export default Navigation;
