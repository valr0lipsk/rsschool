import React from 'react';
import { useLocation } from 'react-router-dom';

export const withLocation =
  (WrappedComponent: typeof React.Component) => (props: { [key: string]: never | unknown }) => {
    const location = useLocation();

    return <WrappedComponent {...props} location={location} />;
  };
