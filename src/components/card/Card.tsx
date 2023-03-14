import React from 'react';
import { IoEye, IoHeart } from 'react-icons/io5';
import style from './Card.module.scss';

interface Props {
  [key: string]: string;
}

export default class Card extends React.Component<Props> {
  render() {
    return (
      <div className={style.card}>
        <img className={style.img} src={this.props.img} />
        <div>
          <p className={style.title}>{this.props.title}</p>
          <div className={style.description}>
            <p>
              Created by
              <br />
              <span>{this.props.author}</span>
            </p>
            <p>{new Date(this.props.createdAt).toDateString()}</p>
          </div>
          <div className={style.info}>
            <span>
              <IoEye /> {this.props.views}
            </span>

            <span>
              <IoHeart /> {this.props.likes}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
