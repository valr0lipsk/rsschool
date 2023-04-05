import React from 'react';
import { ImageItem } from 'types';
import styles from './CardDetails.module.scss';
import { IoHeart } from 'react-icons/io5';

interface Props {
  item: ImageItem | undefined;
}

const CardDetails1: React.FC<Props> = ({ item }) => {
  function capitalizeFirst(s: string) {
    if (!s || !s.length) return s;
    return s[0].toUpperCase() + s.substring(1);
  }

  if (!item) return null;
  return (
    <div className={styles.container} data-testid="details">
      <img src={item.urls.regular} alt={item.alt_description} />
      <div className={styles.info}>
        <p className={styles.description}>{capitalizeFirst(item.alt_description)}</p>
        <p className={styles.info__item}>
          <span>Author:</span> {item.user.username}
        </p>
        <p className={styles.info__item}>
          <span>Created at:</span> {new Date(item.created_at).toDateString()}
        </p>
        <div className={styles.info__container}>
          <p className={styles.info__item}>Color: </p>
          <div className={styles.square} style={{ backgroundColor: `${item.color}` }}></div>
        </div>
        <div className={styles.info__container}>
          <IoHeart /> {item.likes}
        </div>
      </div>
    </div>
  );
};

export default CardDetails1;
