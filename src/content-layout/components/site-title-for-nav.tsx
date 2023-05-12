import React from 'react';
//  chakra-ui
import { Text } from '@chakra-ui/react';
//  hooks
import useSiteMetadata from '../../hooks/use-site-meta-data';

const SiteTitleForNav = () => {
  const siteMetadata = useSiteMetadata();

  return (
    <Text fontSize="sm" fontWeight={100}>
      {siteMetadata.title}
    </Text>
  );
};

export default SiteTitleForNav;
