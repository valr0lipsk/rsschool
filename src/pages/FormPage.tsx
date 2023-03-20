import React from 'react';
import { CardsList, Form, Wrapper } from '../components';

export default class FormPage extends React.Component {
  render() {
    return (
      <Wrapper>
        <Form />
        <CardsList />
      </Wrapper>
    );
  }
}
