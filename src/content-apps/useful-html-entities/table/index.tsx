import React from 'react';
//  chakra-ui
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
//  constants
import entities from '../constants/entities';
//  local components
import TableRow from './row';

const Content = () => (
  <TableContainer>
    <Table size="sm" variant="striped" colorScheme="gray">
      <TableCaption>
        <Box>Common HTML entities used for typography and typesetting</Box>
      </TableCaption>
      <Thead>
        <Tr>
          <Th>Character</Th>
          <Th>Literal</Th>
          <Th>
            <Box>Alphanumeric</Box>
            <Box>Value</Box>
          </Th>
          <Th>
            <Box>Unicode</Box>
            <Box>Value</Box>
          </Th>
          <Th>Prefer To</Th>
          <Th>Type</Th>
        </Tr>
      </Thead>
      <Tbody>
        {entities &&
          entities.length > 0 &&
          entities.map((entity, index) => (
            <TableRow key={index} entity={entity} />
          ))}
      </Tbody>
      <Tfoot>
        <Tr>
          <Th colSpan={5}>
            <Box height="1em"></Box>
            <Box>
              HTML entities useful for proper typesetting, listed in order by
              character.
            </Box>
          </Th>
        </Tr>
      </Tfoot>
    </Table>
  </TableContainer>
);

export default Content;
