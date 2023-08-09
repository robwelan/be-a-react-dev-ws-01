const replaceAll = (payload) => {
  const { string = '', search = '', replaceWith = '' } = payload;

  return string.split(search).join(replaceWith);
};

export default replaceAll;
