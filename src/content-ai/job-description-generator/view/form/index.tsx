import React from 'react';
import { useRecoilState } from 'recoil';
//  chakra-ui
import { Flex, Stack } from '@chakra-ui/react';
//  state
import recoilState from '../../recoil';
import InputIndustry from './input-industry';
import InputJobTitle from './input-job-title';
import InputKeywords from './input-keywords';
import InputTone from './input-tone';
import InputWordCount from './input-word-count';

const ViewForm = () => {
  const [state, setState] = useRecoilState(recoilState);

  console.log('state', state);

  return (
    <Flex justify="center">
      <Stack spacing={4} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <InputJobTitle setState={setState} state={state} />
        <InputIndustry setState={setState} state={state} />
        <InputKeywords setState={setState} state={state} />
        <InputTone setState={setState} state={state} />
        <InputWordCount setState={setState} state={state} />
      </Stack>
    </Flex>
  );
};

export default ViewForm;
