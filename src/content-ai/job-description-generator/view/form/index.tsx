import React from 'react';
import { useRecoilState } from 'recoil';
//  chakra-ui
import { Flex, VStack } from '@chakra-ui/react';
//  local components
import InputIndustry from './input-industry';
import InputJobTitle from './input-job-title';
import InputKeywords from './input-keywords';
import InputTone from './input-tone';
import InputWordCount from './input-word-count';
import CreateJobDescription from '../buttons/create-job-description';
//  state
import recoilState from '../../recoil';

const ViewForm = () => {
  const [state, setState] = useRecoilState(recoilState);

  return (
    <Flex justify="center" p={4}>
      <VStack spacing={4} width="100%">
        <InputJobTitle setState={setState} state={state} />
        <InputIndustry setState={setState} state={state} />
        <InputKeywords setState={setState} state={state} />
        <InputTone setState={setState} state={state} />
        <InputWordCount setState={setState} state={state} />
        <CreateJobDescription setState={setState} state={state} />
      </VStack>
    </Flex>
  );
};

export default ViewForm;
