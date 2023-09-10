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
import { useRecoilState } from 'recoil';
//  cases
import { cases as arrayOfCases } from '../constants/array-of-cases';
import { felonies as arrayOfFelonies01 } from '../constants/array-of-felonies-01';
import getCombinedArrays from '../utilities/get-combined-array';
//  state
import { felonyHeight } from '../state';

const arrayOfFelonyCharges = [...arrayOfFelonies01];

const Charges = () => (
  <>
    {arrayOfFelonyCharges.map(({ caseId = 0, count = 0, what = '' }, index) => (
      <p key={index}>{`${count}. ${what}`}</p>
    ))}
  </>
);

export default Charges;
