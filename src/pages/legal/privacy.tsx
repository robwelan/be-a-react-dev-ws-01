import React from 'react';
import { HeadFC, PageProps } from 'gatsby';
//  components
import Seo from '../../components/seo';
//  content
import PageContent from '../../content-pages/legal/privacy';

const PrivacyPage: React.FC<PageProps> = () => <PageContent />;

export default PrivacyPage;

export const Head: HeadFC = () => <Seo title="Privacy" />;
