import React from 'react';
import { Form, Wrapper } from '../components';
import { User } from '../types';
import data from '../assets/users.json';
import { UsersList } from '../components';

interface State {
  items: User[];
}

export default class FormPage extends React.Component {
  state: State = {
    items: [],
  };

  addNewUser = (user: User) => {
    this.setState((prev: State) => ({ items: [...prev.items, user] }));
    console.log(user, this.state);
  };

  componentDidMount() {
    this.setState({ items: data });
  }

  render() {
    return (
      <Wrapper>
        <Form handleSubmit={this.addNewUser} />
        <UsersList users={this.state.items} />
      </Wrapper>
    );
  }
}
