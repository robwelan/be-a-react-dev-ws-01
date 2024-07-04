import React from 'react';
//  recoil
import { useRecoilValue } from 'recoil';
//  components
import LoadingScreen from '../../components/loading-screen';
//  local components
import DataEmojis from './data';
import ViewEmojis from './view';
//  recoil state
import { allEmojis, emojiOrganisation } from './state/atoms';

const ContentEmojis = () => {
  const stateAllEmojis = useRecoilValue(allEmojis);
  const organisation = useRecoilValue(emojiOrganisation);
  const { processed: dictionaryIsProcessed } = stateAllEmojis;
  const { processed: organisationIsProcessed } = organisation;

  return (
    <>
      <DataEmojis />
      {(!dictionaryIsProcessed || !organisationIsProcessed) && (
        <LoadingScreen />
      )}
      {dictionaryIsProcessed && organisationIsProcessed && <ViewEmojis />}
    </>
  );
};

export default ContentEmojis;
