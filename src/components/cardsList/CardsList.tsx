import React from 'react';
import style from './CardsList.module.scss';
import Card from '../card/Card';
import { Item } from '../../types';
interface Props {
  items: Item[];
}

const CardsList: React.FC<Props> = ({ items }) => {
  return (
    <div className={style.container} data-testid="cardsList">
      {items.map((item) => (
        <Card {...item} key={item.id} />
      ))}
    </div>
  );
};

export default CardsList;
