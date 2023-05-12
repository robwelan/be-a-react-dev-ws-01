import React from 'react';
import { HeadFC, PageProps } from 'gatsby';
//  components
import SEO from '../../components/seo';
//  content
import PageContent from '../../content-pages/legal/cookies';

const CookiesPage: React.FC<PageProps> = () => <PageContent />;

export default CookiesPage;

export const Head: HeadFC = () => <SEO title="Cookies" />;
