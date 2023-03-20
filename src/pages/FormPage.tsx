import React from 'react';
import { Form, Wrapper } from '../components';
import { Item } from '../types';
import data from '../assets/users.json';
import { UsersList } from '../components';

interface State {
  items: Item[];
}

export default class FormPage extends React.Component {
  state: State = {
    items: [],
  };

  componentDidMount() {
    this.setState({ items: data });
  }

  render() {
    return (
      <Wrapper>
        <Form />
        <UsersList users={data} />
      </Wrapper>
    );
  }
}
