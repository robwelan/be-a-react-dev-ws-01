import { useEffect, useState } from 'react';
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
  const [track, setTrack] = useState(filtered);

  //  track effect
  useEffect(() => {
    if (track !== filtered) {
      setTrack(filtered);
      setFake((prevState) => ({ ...prevState, loading: true }));
    }
    if (track === filtered) {
      setFake((prevState) => ({ ...prevState, loading: false }));
    }
  }, [track, filtered]);

  useEffect(() => {
    if (filtered) {
      setFake((prevState) => ({
        ...prevState,
        emojis: filteredEmojis,
        processed: true,
      }));
    }

    if (!filtered) {
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
