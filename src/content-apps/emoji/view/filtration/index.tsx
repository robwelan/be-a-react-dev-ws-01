import React from 'react';
//  recoil
import { useRecoilValue } from 'recoil';
import { emojiDictionary, emojiOrganisation } from '../../state/atoms';

const Filtration = () => {
  const organisation = useRecoilValue(emojiOrganisation);
  console.log('orgainataion', organisation);
  return 'Filtration';
};

export default Filtration;
