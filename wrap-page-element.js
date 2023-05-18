/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
//  routes and layout
import Layout from './src/content-layout';
import Routes from './src/security/routes';

const wrapPageElement = ({ element, props }) => {
  const { location } = props;

  return (
    <Layout {...props}>
      <Routes element={element} location={location} />
    </Layout>
  );
};

export default wrapPageElement;
