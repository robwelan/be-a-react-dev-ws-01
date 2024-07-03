import React from 'react';
//  chakra-ui
import { Heading, Text, VStack } from '@chakra-ui/react';
//  recoil
import { useRecoilValue } from 'recoil';
import { emojiDictionary, emojiDictionaryFilter } from '../../../state/atoms';
//  local components
import Wrapper from '../components/wrapper';
//  local filter devices
import InputFilter from '../input-filter';
import SelectGroup from '../select-group';
import SelectSubgroup from '../select-subgroup';
//  local utilities
import getTotalEmojisText from '../utilities/get-total-emojis-text';
//  styles
import './index.css';

const Main = () => {
  const dictionary = useRecoilValue(emojiDictionary);
  const dictionaryFilter = useRecoilValue(emojiDictionaryFilter);

  const labelTotals = getTotalEmojisText({
    filtered: dictionaryFilter.filtered,
    emojisDictionary: dictionary.emojis,
    emojisFiltered: dictionaryFilter.emojis,
  });

  return (
    <VStack align="stretch" className="fixed-stack">
      <Wrapper>
        <Text align="center" fontSize="xs" marginBottom={4}>
          {labelTotals}
        </Text>
        <Wrapper heading="Search">
          <InputFilter />
          <Text align="center" fontSize="xs" marginTop={2}>
            Use this tool to search the entire emoji set.
          </Text>
        </Wrapper>
        <Wrapper heading="Filter by Sets">
          <Heading as="h3" size="sm">
            Sets
          </Heading>
          <SelectGroup />
          <Heading as="h3" size="sm">
            Subsets
          </Heading>
          <SelectSubgroup />
        </Wrapper>
      </Wrapper>
    </VStack>
  );
};

export default Main;
