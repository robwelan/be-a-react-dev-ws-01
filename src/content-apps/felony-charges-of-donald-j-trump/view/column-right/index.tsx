import React from 'react';
//  chakra-ui
import { Box, Heading, Divider } from '@chakra-ui/react';
//  recoil
import { useSetRecoilState } from 'recoil';
//  local components
import Marquee from './marquee';
//  state
import { felonyHeight } from '../../state';

const ColumnRight = (props) => {
  const { children } = props;
  const setFelonyHeight = useSetRecoilState(felonyHeight);

  return (
    <>
      <Box className="container-heading">
        <Heading as="h1" display="block">
          Trump’s 91 Felony Charges
        </Heading>
        <Divider />
      </Box>
      <Box className="container">
        <Marquee>{children}</Marquee>
      </Box>
    </>
  );
};

export default ColumnRight;
