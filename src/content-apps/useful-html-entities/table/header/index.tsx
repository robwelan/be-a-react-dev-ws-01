import React from 'react';
//  chakra-ui
import { Box, HStack, Thead, Tr, Th, VStack } from '@chakra-ui/react';
//  local components
import SortTool from '../sort-tool';

const Content = () => (
  <Thead>
    <Tr>
      <Th>
        <HStack>
          <Box>Character</Box>
          <Box>
            <SortTool ariaLabel="Sort by Character" />
          </Box>
        </HStack>
      </Th>
      <Th>
        <Box>Literal</Box>
      </Th>
      <Th>
        <HStack>
          <VStack>
            <Box>Alphanumeric</Box>
            <Box>Value</Box>
          </VStack>
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
          <Box>
            <SortTool ariaLabel="Sort by Unicode" />
          </Box>
        </HStack>
      </Th>
      <Th>Prefer To</Th>
      <Th>
        <HStack>
          <Box>Type</Box>
          <Box>
            <SortTool ariaLabel="Sort by Type" />
          </Box>
        </HStack>
      </Th>
    </Tr>
  </Thead>
);

export default Content;
