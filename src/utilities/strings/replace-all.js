const replaceAll = (payload) => {
  const { string = '', search = '', replaceWith = '' } = payload;

  if (!string || string === '') {
    return '';
  }

  return string.split(search).join(replaceWith);
};

export default replaceAll;
