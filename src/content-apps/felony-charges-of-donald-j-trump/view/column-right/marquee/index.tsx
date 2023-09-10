import React, { memo, useEffect, useState, useReducer } from 'react';
//  chakra-ui
import {
  Box,
  Heading,
  Image,
  List,
  ListItem,
  SimpleGrid,
} from '@chakra-ui/react';
import ContainerDimensions from 'react-container-dimensions';
import { useRecoilValue } from 'recoil';
//  cases
import { cases as arrayOfCases } from '../../../constants/array-of-cases';
import { felonies as arrayOfFelonies01 } from '../../../constants/array-of-felonies-01';
import getCombinedArrays from '../../../utilities/get-combined-array';
//  state
import { felonyHeight } from '../../../state';

const arrayOfFelonyCharges = [...arrayOfFelonies01];

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
