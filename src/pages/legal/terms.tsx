import * as React from 'react';
import { HeadFC, PageProps } from 'gatsby';
//  components
import Seo from '../../components/seo';
//  content
import PageContent from '../../content-pages/legal/terms';

const TermsPage: React.FC<PageProps> = () => <PageContent />;

export default TermsPage;

export const Head: HeadFC = () => <Seo title="Terms" />;
