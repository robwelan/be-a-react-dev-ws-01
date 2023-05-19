const getHeadTitle = (payload) => {
  const { siteTitle = '', propsTitle = '' } = payload;

  if (siteTitle === '') {
    return 'No Site Title Defined';
  }

  if (siteTitle === propsTitle) {
    return siteTitle;
  }

  return `${propsTitle} | ${siteTitle}`;
};

export default getHeadTitle;
