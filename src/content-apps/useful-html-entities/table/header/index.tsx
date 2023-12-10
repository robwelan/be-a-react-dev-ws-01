import React from 'react';
//  chakra-ui
import { Box, HStack, Thead, Tr, Th, VStack } from '@chakra-ui/react';
//  recoil
import { useRecoilState } from 'recoil';
//  constants
import {
  SORT_BY_COLUMN_ALPHANUMERIC,
  SORT_BY_COLUMN_CHARACTER,
  SORT_BY_COLUMN_TYPE,
  SORT_BY_COLUMN_UNICODE,
  SORT_BY_ORDER_ASCENDING,
  SORT_BY_ORDER_DESCENDING,
} from '../../constants/sorting';
//  local components
import SortTool from '../sort-tool';
//  recoil state
import { htmlEntitiesSortState } from '../../state/atoms';

const Content = () => {
  const [state, setState] = useRecoilState(htmlEntitiesSortState);

  return (
    <Thead>
      <Tr>
        <Th>
          <HStack>
            <Box>Character</Box>
            <Box>
              <SortTool
                ariaLabel="Sort by Character"
                control={SORT_BY_COLUMN_CHARACTER}
                state={state}
                setState={setState}
              />
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
              <SortTool
                ariaLabel="Sort by Alphanumeric"
                control={SORT_BY_COLUMN_ALPHANUMERIC}
                state={state}
                setState={setState}
              />
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
              <SortTool
                ariaLabel="Sort by Unicode"
                control={SORT_BY_COLUMN_UNICODE}
                state={state}
                setState={setState}
              />
            </Box>
          </HStack>
        </Th>
        <Th>Prefer To</Th>
        <Th>
          <HStack>
            <Box>Type</Box>
            <Box>
              <SortTool
                ariaLabel="Sort by Type"
                control={SORT_BY_COLUMN_TYPE}
                state={state}
                setState={setState}
              />
            </Box>
          </HStack>
        </Th>
      </Tr>
    </Thead>
  );
};

export default Content;
