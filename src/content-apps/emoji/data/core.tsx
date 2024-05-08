import React, { useEffect } from 'react';
//  recoil
import { SetterOrUpdater, useSetRecoilState } from 'recoil';
//  state
import { emojiDictionary, emojiOrganisation } from '../state/atoms';
import { TypeEmojiDictionary, TypeEmojiOrganisation } from '../state/types';
//  utilities
import setData from './utilities/core/set-data';

const DataCore = () => {
  const setEmojiDictionary: SetterOrUpdater<TypeEmojiDictionary> =
    useSetRecoilState(emojiDictionary);
  const setEmojiOrganisation: SetterOrUpdater<TypeEmojiOrganisation> =
    useSetRecoilState(emojiOrganisation);

  //  on load effect
  useEffect(() => {
    setData({
      setEmojis: setEmojiDictionary,
      setOrganisations: setEmojiOrganisation,
    });
  }, []);

  return <></>;
};

export default DataCore;
