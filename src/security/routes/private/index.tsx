/* eslint-disable react/jsx-props-no-spreading */
import React, { FunctionComponent } from 'react';

type Props = {
  allow: { anonymous: boolean };
  component: FunctionComponent;
  groups: Array<string>;
  location: object;
  path: string;
};

const PrivateRoute = (props: Props) => {
  const { allow, component: Component, groups, location, ...rest } = props;

  return <Component {...location} {...rest} />;
};

export default PrivateRoute;
