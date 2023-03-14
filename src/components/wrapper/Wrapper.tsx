import React from 'react';
import style from './Wrapper.module.scss';

export default class Wrapper extends React.Component<React.PropsWithChildren> {
  render() {
    return <div className={style.wrapper}>{this.props.children}</div>;
  }
}
