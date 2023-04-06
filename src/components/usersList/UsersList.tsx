import React from 'react';
import { User } from '../../utils/types';
import style from './UsersList.module.scss';
import UserCard from '../userCard/UserCard';

interface Props {
  users: User[];
}

const UsersList: React.FC<Props> = ({ users }) => {
  return (
    <div className={style.container} data-testid="usersList">
      {users.map((user) => (
        <UserCard {...user} key={user.id} />
      ))}
    </div>
  );
};

export default UsersList;
