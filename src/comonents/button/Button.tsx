import React, { FC } from 'react';
import styles from './Button.module.scss';

interface Props {
  children: React.ReactNode;
  onClickHandler: () => void;
}

const Button: FC<Props> = ({ onClickHandler, children }) => {
  return (
    <button onClick={onClickHandler} className={styles.button}>
      {children}
    </button>
  );
};
export default Button;
