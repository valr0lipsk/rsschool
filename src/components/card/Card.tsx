import React from 'react';
import { IoEye, IoHeart } from 'react-icons/io5';
import style from './Card.module.scss';

interface Props {
  [key: string]: string;
}

const Card: React.FC<Props> = ({ img, title, author, createdAt, views, likes }) => {
  return (
    <div className={style.card}>
      <img className={style.img} src={img} />
      <div>
        <p className={style.title}>{title}</p>
        <div className={style.description}>
          <p>
            Created by
            <br />
            <span>{author}</span>
          </p>
          <p>{new Date(createdAt).toDateString()}</p>
        </div>
        <div className={style.info}>
          <span>
            <IoEye /> {views}
          </span>

          <span>
            <IoHeart /> {likes}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
