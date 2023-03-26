import React from 'react';
import { Wrapper, Search, CardsList } from '../components';
import { Item } from '../types';
import data from '../assets/cards.json';

interface State {
  items: Item[];
}
export default class Main extends React.Component {
  state: State = {
    items: [],
  };

  componentDidMount() {
    this.setState({ items: data });
  }

  render() {
    return (
      <Wrapper>
        <Search />
        <CardsList items={this.state.items} />
      </Wrapper>
    );
  }
}
