import React from 'react';
import styles from './Notification.module.scss';

interface Props {
  type: 'success' | 'error';
  text: string;
}

export default class Notification extends React.Component<Props> {
  render() {
    return (
      <div className={styles.notification + ` ${styles[this.props.type]}`}>{this.props.text}</div>
    );
  }
}
