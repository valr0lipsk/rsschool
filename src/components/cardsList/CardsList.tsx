import React from 'react';
import style from './CardsList.module.scss';
import Card from '../card/Card';
import { ImageItem } from '../../types';
interface Props {
  items: ImageItem[] | undefined;
}

const CardsList: React.FC<Props> = ({ items }) => {
  return (
    <div className={style.container} data-testid="cardsList">
      {items && items.map((item) => <Card {...item} key={item.id} />)}
    </div>
  );
};

export default CardsList;
