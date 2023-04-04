import React from 'react';
import { Form, Wrapper, Notification } from '../components';
import { User } from '../types';
import { UsersList } from '../components';

const FormPage = () => {
  const [items, setItems] = React.useState<User[]>([]);
  const [isNotificationShown, setNotificationShown] = React.useState<boolean>(false);

  const addNewUser = (user: User) => {
    setItems((prev: User[]) => [...prev, user]);
    setNotificationShown(true);
    setTimeout(() => setNotificationShown(false), 1300);
  };

  return (
    <Wrapper>
      <Form handleFormSubmit={addNewUser} />
      <UsersList users={items} />
      {isNotificationShown && <Notification type={'success'} text="User was added" />}
    </Wrapper>
  );
};

export default FormPage;
