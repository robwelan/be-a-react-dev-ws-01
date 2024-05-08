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

const SelectSubgroup = () => {
  const organisation = useRecoilValue(emojiOrganisation);
  const setEmojiDictionaryFilter = useSetRecoilState(emojiDictionaryFilter);
  const { processed } = organisation;

  if (!processed) return null;

  return (
    <Select
      onChange={(event) => {
        handleSelectChange({
          event,
          key: 'subgroup',
          setState: setEmojiDictionaryFilter,
        });
      }}
      placeholder="Select an option"
    >
      {organisation.simple.subgroups.map((item, index) => {
        return (
          <option key={index} value={item.toLowerCase()}>
            {item}
          </option>
        );
      })}
    </Select>
  );
};

export default SelectSubgroup;
