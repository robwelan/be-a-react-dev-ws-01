import React, { useEffect, useState } from 'react';
//  chakra-ui
import {
  Box,
  Heading,
  Image,
  List,
  ListItem,
  SimpleGrid,
} from '@chakra-ui/react';
//  recoil
import { useRecoilValue, useSetRecoilState } from 'recoil';
//  cases
import { cases as arrayOfCases } from '../../constants/array-of-cases';
import { felonies as arrayOfFelonies01 } from '../../constants/array-of-felonies-01';
import getCombinedArrays from '../../utilities/get-combined-array';
//  local components
import Marquee from './marquee';
//  state
import { felonyHeight } from '../../state';

const arrayOfFelonyCharges = [...arrayOfFelonies01];

const ColumnRight = (props) => {
  const { children } = props;
  const valueFelonyHeight = useRecoilValue(felonyHeight);
  const setFelonyHeight = useSetRecoilState(felonyHeight);
  const combinedFelonies = getCombinedArrays({
    headings: arrayOfCases,
    items: arrayOfFelonyCharges,
  });

  return (
    <>
      <Box className="container">
        <Marquee>{children}</Marquee>
      </Box>
    </>
  );
};

export default ColumnRight;
