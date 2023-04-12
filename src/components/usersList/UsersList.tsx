import React from 'react';
import style from './UsersList.module.scss';
import UserCard from '../userCard/UserCard';
import { useAppSelector } from '../../hooks/redux';

const UsersList: React.FC = () => {
  const users = useAppSelector((state) => state.users.items);
  return (
    <div className={style.container} data-testid="usersList">
      {users.map((user) => (
        <UserCard {...user} key={user.id} />
      ))}
    </div>
  );
};

export default UsersList;
