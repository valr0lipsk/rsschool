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
          <div>
            <p>{this.props.title}</p>
            <span>Created by {this.props.author}</span>
            <span>{this.props.createdAt}</span>
          </div>
          <div>
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
