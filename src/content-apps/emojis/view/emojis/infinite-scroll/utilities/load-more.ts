import { TypeArrayOfEmojis } from '../../../../state/types';

type TypeGetLastRowGoingDown = {
  maxEnd: number;
  proposedEnd: number;
};

const getLastRowGoingDown = (payload: TypeGetLastRowGoingDown) => {
  const { maxEnd, proposedEnd } = payload;

  if (proposedEnd >= maxEnd) {
    return maxEnd;
  }

  return proposedEnd;
};

const loadMore = async (
  emojis: TypeArrayOfEmojis,
  length: number,
  offset: number = 50,
  rowCount: number,
  timeout: number,
): Promise<TypeArrayOfEmojis> => {
  const proposedEnd = length + offset;
  const maxEnd = rowCount > 0 ? rowCount + 1 : 0;
  const lastRowCountGoingDown = getLastRowGoingDown({
    proposedEnd,
    maxEnd,
  });

  if (proposedEnd === maxEnd) {
    return new Promise((res) => res([]));
  }

  return new Promise((res) =>
    setTimeout(() => res(emojis.slice(length, lastRowCountGoingDown)), timeout),
  );
};

export default loadMore;
