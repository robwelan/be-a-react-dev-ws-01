import React from 'react';
import { useRecoilValue } from 'recoil';
//  chakra-ui
import { Flex, VStack } from '@chakra-ui/react';
//  local components
import InputOutput from './input-output';
//  state
import recoilState from '../../recoil';

const ViewOutput = () => {
  const state = useRecoilValue(recoilState);

  return (
    <Flex justify="center" p={4}>
      <VStack spacing={4} width="100%">
        <InputOutput state={state} />
      </VStack>
    </Flex>
  );
};

export default ViewOutput;
