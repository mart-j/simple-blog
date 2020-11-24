import React, { FC, RefObject } from 'react';

interface Props {
  changeHandler: () => void;
  inputElement: RefObject<HTMLInputElement>;
}

const Input: FC<Props> = ({ inputElement, changeHandler }) => {
  return <input ref={inputElement} onChange={changeHandler} type="text" />;
};
export default Input;
