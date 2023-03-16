import { Wrapper } from '../components';
import React from 'react';

export default class NotFound extends React.Component {
  render() {
    const style = {
      display: 'flex',
      alignItems: 'center',
      fontSize: 'var(--fs-xl)',
      fontWeight: 'var(--fw-bold)',
    };
    return (
      <Wrapper>
        <div style={style}>Not Found</div>
      </Wrapper>
    );
  }
}
