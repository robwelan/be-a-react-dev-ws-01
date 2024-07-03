import { useEffect } from 'react';
//  recoil
import { useRecoilValue, useSetRecoilState } from 'recoil';
//  recoil state
import {
  emojiDictionary,
  emojiFakeAPI,
  emojiDictionaryFilter,
} from '../state/atoms';

const Api = () => {
  const setFake = useSetRecoilState(emojiFakeAPI);
  const emojis = useRecoilValue(emojiDictionary);
  const { emojis: allEmojis } = emojis;
  const filter = useRecoilValue(emojiDictionaryFilter);
  const { emojis: filteredEmojis, filtered } = filter;

  useEffect(() => {
    if (filtered) {
      console.log('filtered');
      setFake((prevState) => ({
        ...prevState,
        emojis: filteredEmojis,
        processed: true,
      }));
    }

    if (!filtered) {
      console.log('note filered');
      setFake((prevState) => ({
        ...prevState,
        emojis: allEmojis,
        processed: true,
      }));
    }
  }, [filtered]);

  return null;
};

export default Api;
