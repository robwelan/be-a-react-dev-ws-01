import React from 'react';
//  chakra-ui
import { Box, HStack, IconButton, Select } from '@chakra-ui/react';
//  chakra-ui icons
import { CloseIcon } from '@chakra-ui/icons';
//  recoil
import { useRecoilValue, useRecoilState } from 'recoil';
import {
  emojiDictionary,
  emojiDictionaryFilter,
  emojiOrganisation,
} from '../../state/atoms';
//  utilities
import handleClickClear from './utilities/handle-click-clear';
import handleSelectChange from './utilities/handle-select-change';

const SelectSubgroup = () => {
  const organisation = useRecoilValue(emojiOrganisation);
  const [filter, setFilter] = useRecoilState(emojiDictionaryFilter);
  const { processed } = organisation;

  if (!processed) return null;

  return (
    <HStack marginBottom={4}>
      <Box width="100%">
        <Select
          onChange={(event) => {
            handleSelectChange({
              event,
              key: 'subgroup',
              setState: setFilter,
            });
          }}
          placeholder="Select an option"
          value={filter.subgroup}
        >
          {organisation.simple.subgroups.map((item, index) => {
            return (
              <option key={index} value={item.toLowerCase()}>
                {item}
              </option>
            );
          })}
        </Select>
      </Box>
      <Box>
        <IconButton
          aria-label="clear collection"
          icon={<CloseIcon />}
          onClick={() => {
            handleClickClear({
              key: 'subgroup',
              setState: setFilter,
            });
          }}
        />
      </Box>
    </HStack>
  );
};

export default SelectSubgroup;
