import { TypeArrayOfEmojis } from '../../../../state/types';

const loadMore = async (
  emojis: TypeArrayOfEmojis,
  length: number,
  offset: number = 50,
): Promise<TypeArrayOfEmojis> =>
  new Promise((res) =>
    setTimeout(() => res(emojis.slice(length, length + offset)), 250),
  );

export default loadMore;
