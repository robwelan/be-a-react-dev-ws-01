import * as React from 'react';
import { graphql } from 'gatsby';
//  components
import Seo from '../components/seo';

const NotFoundPage = ({ location }) => {
  return (
    <>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </>
  );
};

export const Head = () => <Seo title="404: Not Found" />;

export default NotFoundPage;

