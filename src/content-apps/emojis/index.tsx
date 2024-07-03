import React from 'react';
//  recoil
import { useRecoilValue } from 'recoil';
//  local components
import DataApi from './api';
import DataEmojis from './data';
import ViewEmojis from './view';
//  recoil state
import { emojiDictionary, emojiOrganisation } from './state/atoms';

const ContentEmojis = () => {
  const dictionary = useRecoilValue(emojiDictionary);
  const organisation = useRecoilValue(emojiOrganisation);
  const { processed: dictionaryIsProcessed } = dictionary;
  const { processed: organisationIsProcessed } = organisation;

  return (
    <>
      <DataEmojis />
      {dictionaryIsProcessed && <DataApi />}
      {dictionaryIsProcessed && organisationIsProcessed && <ViewEmojis />}
    </>
  );
};

export default ContentEmojis;
