import React from 'react';
//  chakra-ui
import { Box, Container } from '@chakra-ui/react';
//  types
import { Children } from '../../constants/types';

type Props = {
  children: Children;
};

const SmallContainer = (props: Props) => {
  const { children } = props;

  return (
    <Container centerContent>
      <Box w="100%" p={4}>
        <Box w="100%" sx={{ height: '1em' }} />
        <>{children}</>
      </Box>
    </Container>
  );
};

export default SmallContainer;
