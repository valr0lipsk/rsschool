import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export interface WithRouterProps {
  location: ReturnType<typeof useLocation>;
  params: Record<string, string>;
  navigate: ReturnType<typeof useNavigate>;
}

export const withRouter = <Props extends WithRouterProps>(
  Component: React.ComponentType<Props>
) => {
  return (props: Omit<Props, keyof WithRouterProps>) => {
    const location = useLocation();
    const params = useParams();
    const navigate = useNavigate();

    return (
      <Component {...(props as Props)} location={location} params={params} navigate={navigate} />
    );
  };
};

// function withRouter1(Component) {
//   function ComponentWithRouterProp(props) {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const params = useParams();
//     return <Component {...props} router={{ location, navigate, params }} />;
//   }

//   return ComponentWithRouterProp;
// }

export const withRouter2 =
  (WrappedComponent: typeof React.Component) => (props: { [key: string]: never | unknown }) => {
    const params = useParams();
    return <WrappedComponent {...props} params={params} />;
  };
