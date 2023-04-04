import React from 'react';
import style from './Wrapper.module.scss';

const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div data-testid="wrapper" className={style.wrapper}>
      {children}
    </div>
  );
};

export default Wrapper;
