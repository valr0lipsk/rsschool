import React from 'react';
import style from './CardsList.module.scss';
import Card from '../card/Card';
import { Item } from '../../types';
interface Props {
  items: Item[];
}

export default class CardsList extends React.Component<Props> {
  render() {
    return (
      <div className={style.container} data-testid="cardsList">
        {this.props.items.map((item) => (
          <Card {...item} key={item.id} />
        ))}
      </div>
    );
  }
}
