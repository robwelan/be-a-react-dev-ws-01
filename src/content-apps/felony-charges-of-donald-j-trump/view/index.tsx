import React from 'react';
//  chakra-ui
import { Box, Flex } from '@chakra-ui/react';
//  local components
import ColumnLeft from './column-left';
import ColumnRight from './column-right';
//  routes
import { PUBLIC_ROUTE_PAGE_APPS_FELONY_CHARGES_DJT } from '../../../security/constants/routes-public';
//  styles
import '../styles/index.css';
import '../styles/marquee.css';
//  utilities
import replaceAll from '../../../utilities/strings/replace-all';

const ViewIndex = (props) => {
  const { children, location } = props;
  const { pathname } = location;
  const cleanPathname = replaceAll({
    replaceWith: '',
    search: '/',
    string: pathname,
  });
  const cleanRoute = replaceAll({
    replaceWith: '',
    search: '/',
    string: PUBLIC_ROUTE_PAGE_APPS_FELONY_CHARGES_DJT,
  });
  const height = cleanPathname === cleanRoute ? '70vh' : '100vh';
  const width = cleanPathname === cleanRoute ? '100%' : '100vw';

  return (
    <>
      <Flex className="grid-container" sx={{ height, width }}>
        <Box
          sx={{
            padding: 0,
            marginBottom: '-1em',
          }}
        >
          <ColumnLeft />
        </Box>
        <Box flex={1}>
          <ColumnRight>{children}</ColumnRight>
        </Box>
      </Flex>
    </>
  );
};

export default ViewIndex;
