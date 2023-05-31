import React from 'react';
//  chakra-ui
import { Box } from '@chakra-ui/react';

const DisplayWrapper = (props) => {
  const { children } = props;

  return (
    <Box display="flex" justifyContent="center" w="100%">
      {children}
    </Box>
  );
};

export default DisplayWrapper;
