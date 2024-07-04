import React from 'react';
//  chakra-ui
import { Box, HStack, IconButton, Select } from '@chakra-ui/react';
//  chakra-ui icons
import { CloseIcon } from '@chakra-ui/icons';
//  recoil
import { useRecoilValue, useRecoilState } from 'recoil';
import { filteredEmojis, emojiOrganisation } from '../../../state/atoms';
//  utilities
import handleClickClear from '../utilities/handle-click-clear';
import handleSelectChange from '../utilities/handle-select-change';

const SelectGroup = () => {
  const organisation = useRecoilValue(emojiOrganisation);
  const [filter, setFilter] = useRecoilState(filteredEmojis);

  return (
    <HStack marginBottom={4}>
      <Box width="100%">
        <Select
          onChange={(event) => {
            handleSelectChange({
              event,
              key: 'group',
              setState: setFilter,
            });
          }}
          placeholder="Select an option"
          value={filter.group}
        >
          {organisation.complex.map((item, index) => {
            const { group } = item;

            return (
              <option key={index} value={group.toLowerCase()}>
                {group}
              </option>
            );
          })}
        </Select>
      </Box>
      <Box>
        <IconButton
          aria-label="clear group"
          color="gray.300"
          icon={<CloseIcon />}
          onClick={() => {
            handleClickClear({
              key: 'group',
              setState: setFilter,
            });
          }}
        />
      </Box>
    </HStack>
  );
};

export default SelectGroup;
