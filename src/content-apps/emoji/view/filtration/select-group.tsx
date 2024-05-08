import React from 'react';
//  chakra-ui
import { Select } from '@chakra-ui/react';
//  recoil
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  emojiDictionary,
  emojiDictionaryFilter,
  emojiOrganisation,
} from '../../state/atoms';
//  utilities
import handleSelectChange from './utilities/handle-select-change';

const SelectGroup = () => {
  const organisation = useRecoilValue(emojiOrganisation);
  const setEmojiDictionaryFilter = useSetRecoilState(emojiDictionaryFilter);
  const { processed } = organisation;

  if (!processed) return null;

  return (
    <Select
      onChange={(event) => {
        handleSelectChange({
          event,
          key: 'group',
          setState: setEmojiDictionaryFilter,
        });
      }}
      placeholder="Select an option"
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
  );
};

export default SelectGroup;
