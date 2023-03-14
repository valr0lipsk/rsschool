import React from 'react';
import style from './CardsList.module.scss';
import data from '../../assets/data.json';
import Card from '../card/Card';
import { nanoid } from 'nanoid';

interface Item {
  title: string;
  author: string;
  views: string;
  likes: string;
  createdAt: string;
  img: string;
}

interface State {
  items: Item[];
}

export default class CardsList extends React.Component {
  state: State = {
    items: [],
  };

  componentDidMount() {
    this.setState({ items: data });
  }

  render() {
    return (
      <div className={style.container}>
        {this.state.items.map((item) => (
          <Card {...item} key={nanoid()} />
        ))}
      </div>
    );
  }
}
