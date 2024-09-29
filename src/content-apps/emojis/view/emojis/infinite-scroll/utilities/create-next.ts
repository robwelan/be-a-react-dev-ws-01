import { ScrollDirection } from 'react-easy-infinite-scroll-hook';
import loadMore from './load-more';
//  recoil types
import { TypeArrayOfEmojis } from '../../../../state/types';
import { TypeDefaultState } from './default-state';

type CreateNextPayload = {
  api: {
    data: TypeArrayOfEmojis;
  };
  edge: {
    bottom: boolean;
    top: boolean;
  };
  offset: number;
};

const createNext =
  ({
    emojis,
    setData,
    setIsLoading,
    length,
    offset,
    reverse,
  }: {
    setData: (v: React.SetStateAction<TypeDefaultState>) => void;
    setIsLoading: (v: React.SetStateAction<boolean>) => void;
    length: number;
    offset: number;
    reverse?: boolean;
  }) =>
  async (direction: ScrollDirection) => {
    try {
      setIsLoading(true);
      const rows = await loadMore(emojis, length, offset);

      setData((prev) => ({
        ...prev,
        data: {
          ...prev.data,
          emojis: [...prev.data.emojis, ...rows],
          page: prev.data.page + 1,
        },
      }));

      // setData((prev) =>
      //   direction === 'up' || direction === 'left'
      //     ? reverse
      //       ? [...prev, ...rows]
      //       : [...rows, ...prev]
      //     : reverse
      //       ? [...rows, ...prev]
      //       : [...prev, ...rows],
      // );
    } finally {
      setIsLoading(false);
    }
  };

export default createNext;
