import { useEffect } from 'react';
//  recoil
import { useRecoilValue, useRecoilState } from 'recoil';
//  state
import { emojiDictionary, emojiDictionaryFilter } from '../../state/atoms';
//  local utilities
import getFilteredEmojis from '../utilities/filter/get-filtered-emojis';

const Sets = () => {
  const dictionary = useRecoilValue(emojiDictionary);
  const { emojis: emojisCore, processed } = dictionary;
  const [filter, setFilterState] = useRecoilState(emojiDictionaryFilter);
  const { filtered, input, group, subgroup } = filter;

  //  sets effect
  useEffect(() => {
    if (filtered && processed) {
      const filteredEmojis = getFilteredEmojis({
        emojis: emojisCore,
        filtered,
        filters: { input, group, subgroup },
      });

      setFilterState((prevState) => ({
        ...prevState,
        emojis: filteredEmojis,
      }));
    }

    if (!filtered && processed) {
      setFilterState((prevState) => ({
        ...prevState,
        emojis: [],
      }));
    }
  }, [filtered, group, subgroup, processed]);

  return null;
};

export default Sets;
