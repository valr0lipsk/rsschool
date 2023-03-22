import React from 'react';
import { Form, Wrapper, Notification } from '../components';
import { User } from '../types';
import { UsersList } from '../components';

interface State {
  items: User[];
  notificationShown: boolean;
}

export default class FormPage extends React.Component {
  state: State = {
    items: [],
    notificationShown: false,
  };

  addNewUser = (user: User) => {
    this.setState((prev: State) => ({ items: [...prev.items, user], notificationShown: true }));
    setTimeout(() => this.setState({ notificationShown: false }), 1300);
  };

  render() {
    return (
      <Wrapper>
        <Form handleSubmit={this.addNewUser} />
        <UsersList users={this.state.items} />
        {this.state.notificationShown && <Notification type={'success'} text="User was added" />}
      </Wrapper>
    );
  }
}
