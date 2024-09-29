import { ScrollDirection } from 'react-easy-infinite-scroll-hook';
import loadMore from './load-more';
//  recoil types
import { TypeArrayOfEmojis } from '../../../../state/types';
import { TypeDefaultState } from './default-state';

const createNext =
  ({
    emojis,
    setData,
    setIsLoading,
    length,
    offset,
    rowCount,
    reverse,
    timeout,
  }: {
    emojis: TypeArrayOfEmojis;
    setData: (v: React.SetStateAction<TypeDefaultState>) => void;
    setIsLoading: (v: React.SetStateAction<boolean>) => void;
    length: number;
    offset: number;
    rowCount: number;
    reverse?: boolean;
    timeout: number;
  }) =>
  async (direction: ScrollDirection) => {
    try {
      setIsLoading(true);
      const rows = await loadMore(emojis, length, offset, rowCount, timeout);

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
