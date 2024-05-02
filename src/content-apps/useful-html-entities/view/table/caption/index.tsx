import React from 'react';
//  chakra-ui
import { Box, Flex, TableCaption } from '@chakra-ui/react';
//  recoil
import { useRecoilValue } from 'recoil';
//  state
import { htmlEntitiesSortState } from '../../../state/atoms';
//  utilities
import toProperCase from '../../../../../utilities/strings/to-proper-case';

const Caption = () => {
  const state = useRecoilValue(htmlEntitiesSortState);
  const { column, order } = state;
  const title = `HTML entities useful for proper typesetting, listed in ${order} order
by ${toProperCase({ word: column })}.`;

  return (
    <TableCaption placement="top">
      <Box fontSize="1rem">{title}</Box>
    </TableCaption>
  );
};

export default Caption;
