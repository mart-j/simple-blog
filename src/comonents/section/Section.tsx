import React, { FC } from 'react';
import styles from './Section.module.scss';

interface Props {
  children: React.ReactNode;

}

const Section: FC<Props> = ({ children }) => {
  return (
    <section  className={styles.section}>
      {children}
    </section>
  );
};
export default Section;
