import React from 'react';
//  chakra-ui
import { Box, Heading, HStack, IconButton, VStack } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
//  recoil
import { useRecoilValue } from 'recoil';
import { emojiDictionary, emojiOrganisation } from '../../state/atoms';
//  local components
import InputFilter from './input-filter';
import SelectGroup from './select-group';
import SelectSubgroup from './select-subgroup';
//  styles
import './index.css';

const Filtration = () => {
  const organisation = useRecoilValue(emojiOrganisation);
  const { processed } = organisation;

  if (!processed) return null;

  return (
    <VStack align="stretch" className="fixed-stack">
      <Box marginBottom={4}>
        <InputFilter />
      </Box>
      <Box>
        <Heading as="h2" fontSize="80%" textAlign="left">
          Groups:
        </Heading>
      </Box>

      <SelectGroup />

      <Box>
        <Heading as="h2" fontSize="80%" textAlign="left">
          Collections:
        </Heading>
      </Box>

      <SelectSubgroup />
    </VStack>
  );
};

export default Filtration;
