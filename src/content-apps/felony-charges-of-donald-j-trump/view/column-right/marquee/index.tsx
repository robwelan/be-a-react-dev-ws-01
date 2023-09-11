import React from 'react';
//  chakra-ui
import { Box } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
//  state
import { felonyHeight } from '../../../state';

const Marquee = (props) => {
  const { children } = props;
  const height = useRecoilValue(felonyHeight);

  return (
    <>
      <Box
        className="marquee"
        sx={{
          '@keyframes marquee': {
            '0%': {
              top: '100px',
            },
            '100%': {
              top: `-${height}px`,
            },
          },
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default Marquee;
