import React from 'react';
//  chakra-ui
import {
  Box,
  HStack,
  Spacer,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  TableCaption,
  TableContainer,
  VStack,
} from '@chakra-ui/react';
import { ArrowUpDownIcon } from '@chakra-ui/icons';
//  constants
import entities from '../constants/entities';
//  local components
import SortTool from './sort-tool';
import TableRow from './row';

const Content = () => (
  <TableContainer>
    <Table size="sm" variant="striped" colorScheme="gray">
      <TableCaption>
        <Box>Common HTML entities used for typography and typesetting</Box>
      </TableCaption>
      <Thead>
        <Tr>
          <Th>
            <HStack>
              <Box>Character</Box>
              <Spacer />
              <Box>
                <SortTool ariaLabel="Sort by Character" />
              </Box>
            </HStack>
          </Th>
          <Th>
            <HStack>
              <Box>Literal</Box>
              <Spacer />
              <Box>
                <SortTool ariaLabel="Sort by Literal" />
              </Box>
            </HStack>
          </Th>
          <Th>
            <HStack>
              <VStack>
                <Box>Alphanumeric</Box>
                <Box>Value</Box>
              </VStack>
              <Spacer />
              <Box>
                <SortTool ariaLabel="Sort by Alphanumeric" />
              </Box>
            </HStack>
          </Th>
          <Th>
            <HStack>
              <VStack>
                <Box>Unicode</Box>
                <Box>Value</Box>
              </VStack>
              <Spacer />
              <Box>
                <SortTool ariaLabel="Sort by Unicode" />
              </Box>
            </HStack>
          </Th>
          <Th>Prefer To</Th>
          <Th>
            <HStack>
              <Box>Type</Box>
              <Spacer />
              <Box>
                <SortTool ariaLabel="Sort by Type" />
              </Box>
            </HStack>
          </Th>
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
