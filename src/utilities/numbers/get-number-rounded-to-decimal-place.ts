

const getNumberRoundedToDecimalPlaces = (payload) => {
  const { value = 0, places = 0 } = payload;
  const num = Math.round(Number(`${value}e+${places}`));

  return Number(`${num}e-${places}`);
};

export default getNumberRoundedToDecimalPlaces;
