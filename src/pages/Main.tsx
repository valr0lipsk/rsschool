import Wrapper from '../components/wrapper/Wrapper';
import React from 'react';
import Search from '../components/search/Search';
import CardsList from '../components/cardsList/CardsList';

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
