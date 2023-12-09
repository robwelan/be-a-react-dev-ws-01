import React from 'react';
//  chakra-ui
import { Box, Tfoot, Tr, Th } from '@chakra-ui/react';
//  recoil
import { useRecoilValue } from 'recoil';
//  state
import { htmlEntitiesSortState } from '../../state/atoms';

const TableFooter = () => {
  const state = useRecoilValue(htmlEntitiesSortState);
  const { column, order } = state;

  return (
    <Tfoot>
      <Tr>
        <Th colSpan={5}>
          <Box height="1em"></Box>
          <Box>
            HTML entities useful for proper typesetting, listed in {order} order
            by {column}.
          </Box>
        </Th>
      </Tr>
    </Tfoot>
  );
};

export default TableFooter;
