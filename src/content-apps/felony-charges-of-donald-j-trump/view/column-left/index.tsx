import React from 'react';
import { Box, Image } from '@chakra-ui/react';
//  images
import imageProudTrump from '../../../../images/apps/felony-charges-of-donald-j-trump/president-trump-is-proud.png';

const ColumnLeft = () => (
  <Box
    sx={{
      display: 'flex',
      height: '100%',
      alignItems: 'flex-end',
    }}
  >
    <Image src={imageProudTrump} alt="President Donald J Trump" />
  </Box>
);

export default ColumnLeft;
