import { Wrapper } from '../components';
import React from 'react';

const NotFound: React.FC = () => {
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
};

export default NotFound;
