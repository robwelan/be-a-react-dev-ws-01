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

const ColumnRight = () => {
  const [mounted, setMounted] = useState(false);
  const valueFelonyHeight = useRecoilValue(felonyHeight);
  const setFelonyHeight = useSetRecoilState(felonyHeight);
  const combinedFelonies = getCombinedArrays({
    headings: arrayOfCases,
    items: arrayOfFelonyCharges,
  });

  //  mounted effect
  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Box className="container">
        <Marquee />
      </Box>
    </>
  );
};

export default ColumnRight;
