import React from 'react';
//  recoil
import { useRecoilValue } from 'recoil';
//  local components
import DataApi from './api';
import DataEmojis from './data';
import ViewEmojis from './view';
//  recoil state
import {
  emojiDictionary,
  emojiFakeAPI,
  emojiOrganisation,
} from './state/atoms';

const ContentEmojis = () => {
  const dictionary = useRecoilValue(emojiDictionary);
  const fake = useRecoilValue(emojiFakeAPI);
  const organisation = useRecoilValue(emojiOrganisation);
  const { processed: dictionaryIsProcessed } = dictionary;
  const { processed: fakeIsProcessed } = fake;
  const { processed: organisationIsProcessed } = organisation;

  return (
    <>
      <DataEmojis />
      {dictionaryIsProcessed && organisationIsProcessed && <DataApi />}
      {dictionaryIsProcessed && fakeIsProcessed && <ViewEmojis />}
    </>
  );
};

export default ContentEmojis;
