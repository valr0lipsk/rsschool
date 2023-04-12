import React from 'react';
import { Form, Wrapper } from '../components';
import { UsersList } from '../components';

const FormPage: React.FC = () => {
  return (
    <Wrapper>
      <Form />
      <UsersList />
    </Wrapper>
  );
};

export default FormPage;
