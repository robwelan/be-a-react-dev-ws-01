import React from 'react';
//  chakra-ui
import { Box, Heading } from '@chakra-ui/react';
const Wrapper = (props) => {
  const { children, heading } = props;

  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      marginBottom={4}
      padding={4}
    >
      <Heading as="h2" marginBottom={2}>
        {heading}
      </Heading>
      {children}
    </Box>
  );
};

export default Wrapper;
