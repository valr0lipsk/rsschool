import React from 'react';
import { Wrapper, Search, CardsList } from '../components';

export default class Main extends React.Component {
  render() {
    return (
      <Wrapper>
        <Search />
        <CardsList />
      </Wrapper>
    );
  }
}
