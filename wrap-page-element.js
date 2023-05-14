/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Router } from '@reach/router';
//  content
import Layout from './src/content-layout';
//  pages
import PageCookies from './src/pages/legal/cookies';
import PageHome from './src/pages/index';
import PagePrivacy from './src/pages/legal/privacy';
import PageNotFound from './src/pages/404';
import PageShop from './src/pages/shop';
import PageTerms from './src/pages/legal/terms';
//  security
import {
  PUBLIC_ROUTE_PAGE_COOKIES,
  PUBLIC_ROUTE_PAGE_HOME,
  PUBLIC_ROUTE_PAGE_PRIVACY,
  PUBLIC_ROUTE_PAGE_TERMS,
  PUBLIC_ROUTE_PAGE_SHOP,
} from './src/security/constants/routes-public';

// Pass all props (hence the ...props) to the layout component so it has access to things like pageContext or location
const wrapPageElement = ({ element, props }) => {
  const { location } = props;

  return (
    <Layout {...props}>
      <Router basepath={PUBLIC_ROUTE_PAGE_HOME}>
        <PageNotFound default></PageNotFound>
        <PageHome path={PUBLIC_ROUTE_PAGE_HOME} />
        <PageCookies path={PUBLIC_ROUTE_PAGE_COOKIES} />
        <PagePrivacy path={PUBLIC_ROUTE_PAGE_PRIVACY} />
        <PageTerms path={PUBLIC_ROUTE_PAGE_TERMS} />
        <PageShop path={PUBLIC_ROUTE_PAGE_SHOP} />
        {element}
      </Router>
    </Layout>
  );
};

export default wrapPageElement;
