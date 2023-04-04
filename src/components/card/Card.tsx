import React from 'react';
import style from './Card.module.scss';
import { ImageItem } from 'types';

const Card: React.FC<ImageItem> = ({ alt_description, created_at, urls, color }) => {
  return (
    <div className={style.card}>
      <img className={style.img} src={urls.regular} alt={alt_description} />
      <div>
        <div className={style.description}>
          <p>{new Date(created_at).toDateString()}</p>
          <div className={style.square} style={{ backgroundColor: `${color}` }}></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
