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
    offset = 50,
    rowCount,
    timeout = 150,
  }: {
    emojis: TypeArrayOfEmojis;
    setData: (v: React.SetStateAction<TypeDefaultState>) => void;
    setIsLoading: (v: React.SetStateAction<boolean>) => void;
    length: number;
    offset: number;
    rowCount: number;
    timeout: number;
  }) =>
  async () => {
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
    } finally {
      setIsLoading(false);
    }
  };

export default createNext;
