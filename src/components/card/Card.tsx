import React from 'react';
import style from './Card.module.scss';
import { ImageItem } from 'utils/types';

interface Props extends ImageItem {
  onClick: (id: string) => void;
}

const Card: React.FC<Props> = ({ id, alt_description, created_at, urls, color, onClick }) => {
  return (
    <div className={style.card} onClick={() => onClick(id)} data-testid="card">
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
