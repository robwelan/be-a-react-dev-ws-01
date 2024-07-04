import { useEffect } from 'react';
//  recoil
import { SetterOrUpdater, useSetRecoilState } from 'recoil';
//  state
import { allEmojis, emojiOrganisation } from '../../state/atoms';
import { TypeAllEmojis, TypeEmojiOrganisation } from '../../state/types';
//  utilities
import setData from '../utilities/core/set-data';

const Core = () => {
  const setEmojiDictionary: SetterOrUpdater<TypeAllEmojis> =
    useSetRecoilState(allEmojis);
  const setEmojiOrganisation: SetterOrUpdater<TypeEmojiOrganisation> =
    useSetRecoilState(emojiOrganisation);

  //  on load effect
  useEffect(() => {
    setData({
      setEmojis: setEmojiDictionary,
      setOrganisations: setEmojiOrganisation,
    });
  }, []);

  return null;
};

export default Core;
