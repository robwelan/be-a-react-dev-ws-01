import React, { useEffect, useState } from 'react';
//  chakra-ui
import {
  Box,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  SimpleGrid,
} from '@chakra-ui/react';
import ContainerDimensions from 'react-container-dimensions';
//  cases
import { cases as arrayOfCases } from '../constants/array-of-cases';
import { felonies as arrayOfFelonies01 } from '../constants/array-of-felonies-01';
import getCombinedArrays from '../utilities/get-combined-array';
//  images

//  styles
import '../styles/index.css';
import '../styles/marquee.css';
//  local components
import ColumnLeft from './column-left';
import ColumnRight from './column-right';
import SizedOutput from '../charges/sized-charges';

const arrayOfFelonyCharges = [...arrayOfFelonies01];

const ViewIndex = (props) => {
  const { children } = props;
  const [spanHeight, setSpanHeight] = useState(0);
  const combinedFelonies = getCombinedArrays({
    headings: arrayOfCases,
    items: arrayOfFelonyCharges,
  });

  return (
    <>
      <Flex className="grid-container">
        <Box
          sx={{
            padding: 0,
            marginBottom: '-1em',
          }}
        >
          <ColumnLeft />
        </Box>
        <Box flex={1}>
          <ColumnRight>{children}</ColumnRight>
        </Box>
      </Flex>
    </>
  );
};

export default ViewIndex;
