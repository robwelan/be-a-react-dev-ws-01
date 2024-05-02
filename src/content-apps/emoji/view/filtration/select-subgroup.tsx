import React from 'react';
//  chakra-ui
import { Select } from '@chakra-ui/react';
//  recoil
import { useRecoilValue } from 'recoil';
import { emojiDictionary, emojiOrganisation } from '../../state/atoms';

const SelectSubgroup = () => {
  const organisation = useRecoilValue(emojiOrganisation);
  const { processed } = organisation;

  if (!processed) return null;

  return (
    <Select placeholder="Select an option">
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
