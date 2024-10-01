import loadInitial from './load-initial';
//  recoil types
import { TypeArrayOfEmojis } from '../../../../state/types';
import { TypeDefaultState } from './default-state';
//  default state
import defaultState from './default-state';

type TypeCreateInitialPayload = {
  emojis: TypeArrayOfEmojis;
  offset: number;
  setData: (v: React.SetStateAction<TypeDefaultState>) => void;
  setIsLoading: (v: React.SetStateAction<boolean>) => void;
  timeout: number;
};

const doWork = async (payload: TypeCreateInitialPayload) => {
  const { emojis, offset = 50, setData, setIsLoading, timeout = 150 } = payload;

  try {
    setIsLoading(true);
    const rows = await loadInitial({ emojis, offset, timeout });

    setData(() => ({
      ...defaultState,
      data: {
        ...defaultState.data,
        emojis: rows,
        page: defaultState.data.page + 1,
        processed: true,
      },
    }));
  } finally {
    setIsLoading(false);
  }
};

const createInitial = (payload: TypeCreateInitialPayload) => {
  doWork({ ...payload });
};

export default createInitial;
