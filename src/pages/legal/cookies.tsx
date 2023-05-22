import React from 'react';
import { HeadFC, PageProps } from 'gatsby';
//  components
import Seo from '../../components/seo';
//  content
import PageContent from '../../content-pages/legal/cookies';

const CookiesPage: React.FC<PageProps> = () => <PageContent />;

export default CookiesPage;

export const Head: HeadFC = ({ location }) => (
  <Seo location={location} title="Cookies" />
);
