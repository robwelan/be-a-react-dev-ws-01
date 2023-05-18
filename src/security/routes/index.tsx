import React from 'react';
import { Router } from '@reach/router';
//  pages
import PageAbout from '../../pages/about';
import PageCookies from '../../pages/legal/cookies';
import PageHome from '../../pages/index';
import PagePrivacy from '../../pages/legal/privacy';
import PageNotFound from '../../pages/404';
import PageShop from '../../pages/shop';
import PageTerms from '../../pages/legal/terms';
//  security
import {
  PUBLIC_ROUTE_PAGE_ABOUT,
  PUBLIC_ROUTE_PAGE_COOKIES,
  PUBLIC_ROUTE_PAGE_HOME,
  PUBLIC_ROUTE_PAGE_PRIVACY,
  PUBLIC_ROUTE_PAGE_TERMS,
  PUBLIC_ROUTE_PAGE_SHOP,
} from '../../security/constants/routes-public';

const Routes = ({ element, location }) => {
  return (
    <Router basepath={PUBLIC_ROUTE_PAGE_HOME}>
      <PageNotFound default />

      <PageHome path={PUBLIC_ROUTE_PAGE_HOME} />
      <PageAbout path={PUBLIC_ROUTE_PAGE_ABOUT} />
      <PageCookies path={PUBLIC_ROUTE_PAGE_COOKIES} />
      <PagePrivacy path={PUBLIC_ROUTE_PAGE_PRIVACY} />
      <PageTerms path={PUBLIC_ROUTE_PAGE_TERMS} />
      <PageShop path={PUBLIC_ROUTE_PAGE_SHOP} />
      {element}
    </Router>
  );
};

export default Routes;
