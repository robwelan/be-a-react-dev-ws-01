import React from 'react';
//  local components
import MainLayout from './main-layout';
//  types
import { Children, LayoutConfiguration } from '../constants/types';

type Props = {
  children: Children;
  configuration: LayoutConfiguration;
};

const WrapRoutes = (props: Props) => {
  const { children, configuration } = props;

  return <MainLayout configuration={configuration}>{children}</MainLayout>;
};

export default WrapRoutes;
