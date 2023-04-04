import React from 'react';
import { Wrapper, Search, CardsList } from '../components';
import { Item } from '../types';
import data from '../assets/cards.json';

const Main: React.FC = () => {
  const [items] = React.useState<Item[]>(data);

  return (
    <Wrapper>
      <Search />
      <CardsList items={items} />
    </Wrapper>
  );
};

export default Main;
