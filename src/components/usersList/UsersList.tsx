import React from 'react';
import { User } from '../../types';
import style from './UsersList.module.scss';
import UserCard from '../userCard/UsersCard';

interface Props {
  users: User[];
}

export default class UsersList extends React.Component<Props> {
  render() {
    return (
      <div className={style.container} data-testid="usersList">
        {this.props.users.map((user) => (
          <UserCard {...user} key={user.id} />
        ))}
      </div>
    );
  }
}
