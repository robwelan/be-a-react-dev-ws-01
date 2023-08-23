import React, { PropsWithChildren } from 'react';
//  chakra-ui
import { Box } from '@chakra-ui/react';

type Props = {
  marginTop: string;
};

const BasicContainer = (props: PropsWithChildren<Props>) => {
  const { children, marginTop = '' } = props;

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      marginTop={marginTop}
      overflow="hidden"
      p={4}
    >
      {children}
    </Box>
  );
};

export default BasicContainer;
