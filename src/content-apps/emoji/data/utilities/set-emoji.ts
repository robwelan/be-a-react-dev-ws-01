/*
  https://stackoverflow.com/questions/56674968/add-skin-tone-modifier-to-an-emoji-programmatically
  https://www.bennadel.com/blog/4084-rending-emoji-glyphs-using-hexadecimal-codepoints-in-javascript.htm
  */

type PayloadSetEmoji = {
  codes: string;
};

type PayloadOperator = {
  hex: string;
};

const operateOnHex = (payload: PayloadOperator) => {
  const { hex } = payload;

  return parseInt(hex, 16);
};

const setEmoji = (payload: PayloadSetEmoji) => {
  const { codes } = payload;
  const arrayOfCodes = codes.split(' ');

  const codePoints = arrayOfCodes.map((hex) => operateOnHex({ hex }));

  // CAUTION: IE11 does not have .fromCodePoint() method.
  const emojiGlyph = String.fromCodePoint.apply(null, codePoints);

  return emojiGlyph;
};

export default setEmoji;
