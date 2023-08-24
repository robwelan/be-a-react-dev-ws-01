const getHeadingElementFontSize = (payload) => {
  const { element = '' } = payload;

  if (element === 'h1') return '130%';
  if (element === 'h2') return '125%';
  if (element === 'h3') return '120%';
  if (element === 'h4') return '115%';
  if (element === 'h5') return '110%';

  return '105%'; // default or H6
};

export default getHeadingElementFontSize;
