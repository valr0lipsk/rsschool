import Wrapper from '../components/wrapper/Wrapper';
import React, { Component } from 'react';
import Search from '../components/search/Search';

export default class Main extends Component {
  render() {
    return (
      <Wrapper>
        <Search />
      </Wrapper>
    );
  }
}
