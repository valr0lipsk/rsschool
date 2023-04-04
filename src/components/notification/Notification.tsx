import React from 'react';
import styles from './Notification.module.scss';

interface Props {
  type: 'success' | 'error';
  text: string;
}

const Notification: React.FC<Props> = ({ type, text }) => {
  return <div className={styles.notification + ` ${styles[type]}`}>{text}</div>;
};

export default Notification;
