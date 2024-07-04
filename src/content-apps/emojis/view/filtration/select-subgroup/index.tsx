import React from 'react';
//  chakra-ui
import { Box, HStack, IconButton, Select } from '@chakra-ui/react';
//  chakra-ui icons
import { CloseIcon } from '@chakra-ui/icons';
//  recoil
import { useRecoilValue, useRecoilState } from 'recoil';
import { filteredEmojis, emojiOrganisation } from '../../../state/atoms';
//  local utilities
import getOptionList from './get-option-list';
//  utilities
import handleClickClear from '../utilities/handle-click-clear';
import handleSelectChange from '../utilities/handle-select-change';

const SelectSubgroup = () => {
  const organisation = useRecoilValue(emojiOrganisation);
  const [filter, setFilter] = useRecoilState(filteredEmojis);
  const { group } = filter;
  const { complex } = organisation;

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
          {getOptionList({ complex, group, organisation })}
        </Select>
      </Box>
      <Box>
        <IconButton
          aria-label="clear collection"
          color="gray.300"
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
