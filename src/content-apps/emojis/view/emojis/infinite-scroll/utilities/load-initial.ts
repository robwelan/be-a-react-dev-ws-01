import { TypeArrayOfEmojis } from '../../../../state/types';

type TypeLoadInitialPayload = {
  emojis: TypeArrayOfEmojis;
  offset: number;
  timeout: number;
};

const loadInitial = async (
  payload: TypeLoadInitialPayload,
): Promise<TypeArrayOfEmojis> => {
  const { emojis, offset = 50, timeout } = payload;

  return new Promise((res) =>
    setTimeout(() => res(emojis.slice(0, offset)), timeout),
  );
};

export default loadInitial;
