import React from 'react';
//  chakra-ui
import { Box, Link, Text } from '@chakra-ui/react';
//  gatsby
import { Link as GatsbyLink } from 'gatsby';
//  security routes
import { PUBLIC_ROUTE_PAGE_TUTORIALS } from '../../../security/constants/routes-public';

const LinkToTutorials = () => (
  <>
    <Box sx={{ height: '1em' }} />
    <Text>
      <Link as={GatsbyLink} to={PUBLIC_ROUTE_PAGE_TUTORIALS}>
        Back to Tutorials
      </Link>
    </Text>
  </>
);

export default LinkToTutorials;
