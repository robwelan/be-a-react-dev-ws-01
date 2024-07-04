import { useEffect, useState } from 'react';
//  recoil
import { useRecoilValue } from 'recoil';
//  state
import { allEmojis, filteredEmojis } from '../state/atoms';

const defaultState = {
  emojis: [],
  filtered: false,
  length: { all: 0, display: 0 },
};

const useEmojisData = () => {
  const stateAllEmojis = useRecoilValue(allEmojis);
  const { emojis: arrayAllEmojis } = stateAllEmojis;
  const stateFilteredEmojis = useRecoilValue(filteredEmojis);
  const { emojis: arrayFilteredEmojis, filtered } = stateFilteredEmojis;
  const [state, setState] = useState(defaultState);
  const lengthAll = arrayAllEmojis.length;
  const lengthFiltered = arrayFilteredEmojis.length;

  useEffect(() => {
    if (filtered) {
      setState({
        ...defaultState,
        emojis: arrayFilteredEmojis,
        filtered,
        length: {
          all: lengthAll,
          display: lengthFiltered,
        },
      });
    }

    if (!filtered) {
      setState({
        ...defaultState,
        emojis: arrayAllEmojis,
        filtered,
        length: {
          all: lengthAll,
          display: lengthAll,
        },
      });
    }
  }, [filtered, lengthFiltered]);

  return [state];
};

export default useEmojisData;
