import React from 'react';
//  chakra-ui
import { Box, TableCaption } from '@chakra-ui/react';
//  recoil
import { useRecoilValue } from 'recoil';
//  state
import { htmlEntitiesSortState } from '../../state/atoms';
//  utilities
import toProperCase from '../../../../utilities/strings/to-proper-case';

const Caption = () => {
  const state = useRecoilValue(htmlEntitiesSortState);
  const { column, order } = state;

  return (
    <TableCaption placement="top">
      <Box fontSize="1rem">
        HTML entities useful for proper typesetting, listed in {order} order by{' '}
        {toProperCase({ word: column })}.
      </Box>
    </TableCaption>
  );
};

export default Caption;
