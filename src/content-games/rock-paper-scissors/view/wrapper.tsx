import React, { ReactElement } from 'react';
//  chakra-ui
import { Box } from '@chakra-ui/react';

interface Props {
  children: ReactElement;
}

const DisplayWrapper = (props: Props) => {
  const { children } = props;

  return (
    <Box display="flex" justifyContent="center" w="100%">
      {children}
    </Box>
  );
};

export default DisplayWrapper;
