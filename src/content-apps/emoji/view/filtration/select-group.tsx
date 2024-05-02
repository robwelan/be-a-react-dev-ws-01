import React from 'react';
//  chakra-ui
import { Select } from '@chakra-ui/react';
//  recoil
import { useRecoilValue } from 'recoil';
import { emojiDictionary, emojiOrganisation } from '../../state/atoms';

const SelectGroup = () => {
  const organisation = useRecoilValue(emojiOrganisation);
  const { processed } = organisation;

  if (!processed) return null;

  return (
    <Select placeholder="Select an option">
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
