/* eslint-disable import/no-unresolved */
import PropType from 'prop-types';
import React from 'react';
import { Router } from '@reach/router';
//  constants
//  * anonymous
//  ---
//  * private routes
import //  apps

//  collections

//  pages

'../constants/routes-private';
//  * public routes
import {
  PUBLIC_ROUTE_PAGE_ABOUT,
  PUBLIC_ROUTE_PAGE_AUTHENTICATE,
  PUBLIC_ROUTE_PAGE_COOKIES,
  PUBLIC_ROUTE_PAGE_HOME,
  PUBLIC_ROUTE_PAGE_PRICING,
  PUBLIC_ROUTE_PAGE_PRIVACY,
  PUBLIC_ROUTE_PAGE_REFUNDS,
  PUBLIC_ROUTE_PAGE_SHOP,
  PUBLIC_ROUTE_PAGE_TERMS,
} from '../constants/routes-public';
//  private pages

//  public pages
// import PageBlog from '../../pages/blog';
// import BlogPost from '../../templates/blog-post';
// import WeirdPage from '../../pages/{MarkdownRemark.fields__slug}';
import PageHome from '../../pages/index';
import PageBlog from '../../templates/blog-post';
// import LoginPage from '../../pages/login';
import PageNotFound from '../../pages/404';
import PageShop from '../../pages/shop';
//  legal
import PageCookies from '../../pages/legal/cookies';
import PagePrivacy from '../../pages/legal/privacy';
import PageTerms from '../../pages/legal/terms';
//  secure routes
// import AnonymousRoute from '../route-anonymous';
import PrivateRoute from './private';
//  private collections
//  constants
import { Children } from '../../constants/types';

type Props = {
  children: Children;
  location: object;
};

const Routes = (props: Props) => {
  const { children = {}, location } = props;
  const { props: childrenProps = {} } = children;

  return (
    <Router basepath={PUBLIC_ROUTE_PAGE_HOME}>
      <PageHome path={PUBLIC_ROUTE_PAGE_HOME} />
      <PageCookies path={PUBLIC_ROUTE_PAGE_COOKIES} />
      <PagePrivacy path={PUBLIC_ROUTE_PAGE_PRIVACY} />
      <PageTerms path={PUBLIC_ROUTE_PAGE_TERMS} />
      <PageShop path={PUBLIC_ROUTE_PAGE_SHOP} />
      <PageBlog path={`${PUBLIC_ROUTE_PAGE_HOME}:slug`} {...childrenProps} />

      {/* <PageBlog path={PUBLIC_ROUTE_PAGE_BLOG} /> */}
      {/* <BlogPost path={`${PUBLIC_ROUTE_PAGE_BLOG}/:slug`} /> */}
      {/* <PageCookies path={PUBLIC_ROUTE_PAGE_COOKIES} />
      <PagePrivacy path={PUBLIC_ROUTE_PAGE_PRIVACY} />
      <PageTerms path={PUBLIC_ROUTE_PAGE_TERMS} /> */}
      <PageNotFound default />
    </Router>
  );
};

Routes.propTypes = {
  location: PropType.shape({}).isRequired,
};

export default Routes;
