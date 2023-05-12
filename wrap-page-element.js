/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Provider } from 'jotai';

import Layout from './src/content-layout';

// Pass all props (hence the ...props) to the layout component so it has access to things like pageContext or location
const wrapPageElement = ({ element, props }) => (
  <Provider>
    <Layout {...props}>{element}</Layout>
  </Provider>
);

export default wrapPageElement;
