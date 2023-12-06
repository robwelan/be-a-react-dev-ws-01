type Payload = {
  timeOfDay: string;
  theme: {};
};

const getColorMode = (payload: Payload) => {
  const { timeOfDay, theme } = payload;

  return theme[timeOfDay as keyof typeof theme];
};

export default getColorMode;
