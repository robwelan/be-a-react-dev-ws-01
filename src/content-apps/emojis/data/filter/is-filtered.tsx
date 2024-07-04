import { useEffect } from 'react';
//  recoil
import { useRecoilValue, useRecoilState } from 'recoil';
//  state
import { allEmojis, filteredEmojis } from '../../state/atoms';
//  local utilities
import getFilteredValue from '../utilities/filter/get-filtered-value';

const Search = () => {
  const dictionary = useRecoilValue(allEmojis);
  const { processed } = dictionary;
  const [filter, setFilterState] = useRecoilState(filteredEmojis);
  const { filtered, input, group, subgroup } = filter;

  //  filtered value effect
  useEffect(() => {
    if (processed) {
      const filteredValue = getFilteredValue({ input, group, subgroup });

      if (filtered !== filteredValue) {
        setFilterState((prevState) => ({
          ...prevState,
          filtered: filteredValue,
        }));
      }
    }
  }, [input, group, subgroup, processed]);

  return null;
};

export default Search;
