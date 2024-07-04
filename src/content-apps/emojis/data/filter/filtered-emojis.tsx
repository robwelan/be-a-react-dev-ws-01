import { useEffect } from 'react';
//  recoil
import { useRecoilValue, useRecoilState } from 'recoil';
//  state
import { allEmojis, filteredEmojis } from '../../state/atoms';
//  local utilities
import getFilteredEmojis from '../utilities/filter/get-filtered-emojis';

const Sets = () => {
  const dictionary = useRecoilValue(allEmojis);
  const { emojis: emojisCore, processed } = dictionary;
  const [filter, setFilterState] = useRecoilState(filteredEmojis);
  const { filtered, input, group, subgroup } = filter;

  //  filtered emojis effect
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
  }, [filtered, input, group, subgroup, processed]);

  return null;
};

export default Sets;
