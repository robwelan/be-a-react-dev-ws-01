import { useEffect, useState } from 'react';
//  recoil
import { useRecoilValue } from 'recoil';
//  state
import { allEmojis, filteredEmojis } from '../state/atoms';
//  types
import { TypeEmoji } from '../state/types';

interface EmojisState {
  emojis: TypeEmoji[];
  filtered: boolean;
  length: { all: number; display: number };
}
const defaultState: EmojisState = {
  emojis: [],
  filtered: false,
  length: { all: 0, display: 0 },
};

const useEmojisData = () => {
  const { emojis: arrayAllEmojis } = useRecoilValue(allEmojis);
  const { emojis: arrayFilteredEmojis, filtered } =
    useRecoilValue(filteredEmojis);
  const [state, setState] = useState<EmojisState>(defaultState);
  //  calculate lengths
  const lengthAll = arrayAllEmojis.length;
  const lengthDisplay = filtered ? arrayFilteredEmojis.length : lengthAll;

  useEffect(() => {
    setState({
      emojis: filtered ? arrayFilteredEmojis : arrayAllEmojis,
      filtered,
      length: {
        all: lengthAll,
        display: lengthDisplay,
      },
    });
  }, [arrayAllEmojis, arrayFilteredEmojis, filtered, lengthAll, lengthDisplay]);

  return state;
};

export default useEmojisData;
