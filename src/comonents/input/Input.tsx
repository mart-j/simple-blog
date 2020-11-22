import React, { FC, RefObject } from 'react';
import styles from './Input.module.scss';

interface Props {
  changeHandler: () => void;
  inputElement: RefObject<HTMLInputElement>
}

const Input: FC<Props> = ({ inputElement, changeHandler }) => {
  return <input ref={inputElement} onChange={changeHandler} type="text" />;
};
export default Input;
