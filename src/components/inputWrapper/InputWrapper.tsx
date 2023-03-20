import React from 'react';
import styles from './InputWrapper.module.scss';

interface Props {
  name: string;
  title: string;
  type?: string;
}

export default class InputWrapper extends React.Component<React.PropsWithChildren & Props> {
  render() {
    return (
      <div className={styles.wrapper + ` ${this.props.type ? styles[this.props.type] : ''}`}>
        <label htmlFor={this.props.name}>{this.props.title}</label>
        {this.props.children}
      </div>
    );
  }
}
