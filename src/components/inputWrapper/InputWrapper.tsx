import React from 'react';
import styles from './InputWrapper.module.scss';

interface Props {
  name: string;
  title: string;
  type?: string;
  error?: string;
}

const InputWrapper: React.FC<React.PropsWithChildren & Props> = ({
  name,
  title,
  type,
  error,
  children,
}) => {
  return (
    <>
      <div className={styles.wrapper + ` ${type ? styles[type] : ''}`}>
        <label htmlFor={name}>{title}</label>
        {children}
      </div>
      {error && (
        <p className={styles.error} id={title}>
          {error}
        </p>
      )}
    </>
  );
};

export default InputWrapper;
