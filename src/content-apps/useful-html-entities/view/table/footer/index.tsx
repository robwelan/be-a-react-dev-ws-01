import React from 'react';
//  chakra-ui
import { Box, Tfoot, Tr, Th } from '@chakra-ui/react';

const TableFooter = () => (
  <Tfoot>
    <Tr>
      <Th colSpan={5}>
        <Box height="1em"></Box>
        <Box>Common HTML entities used for typography and typesetting</Box>
        <Box height="1em"></Box>
      </Th>
    </Tr>
  </Tfoot>
);

export default TableFooter;
