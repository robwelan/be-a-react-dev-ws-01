type GetTotalEmojisTextPayload = {
  all: number;
  display: number;
  filtered: boolean;
};

const getTotalEmojisText = (payload: GetTotalEmojisTextPayload) => {
  const { all, display, filtered } = payload;

  if (filtered) {
    return `Found ${display} of ${all}`;
  }

  return `Total emjois: ${all}`;
};

export default getTotalEmojisText;
