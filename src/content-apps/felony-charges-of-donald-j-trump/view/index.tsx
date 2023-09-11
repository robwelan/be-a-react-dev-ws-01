import React, { useState } from 'react';
//  chakra-ui
import { Box, Flex } from '@chakra-ui/react';
//  styles
import '../styles/index.css';
import '../styles/marquee.css';
//  local components
import ColumnLeft from './column-left';
import ColumnRight from './column-right';

const ViewIndex = (props) => {
  const { children } = props;

  return (
    <>
      <Flex className="grid-container">
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
