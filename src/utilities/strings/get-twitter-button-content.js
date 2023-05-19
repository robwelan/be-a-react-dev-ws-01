import removeLeadCharacterFromArrayOfStrings from './remove-lead-character-from-array-of-strings';

const getTwitterButtonContent = (payload) => {
  const { main = '', tags = [], url = '' } = payload;
  const maxCharacters = 280;
  const tweet = 'https://twitter.com/intent/tweet?';
  const cleanTags = removeLeadCharacterFromArrayOfStrings({
    values: tags,
    leadCharacter: '#',
  });
  let tweetMain = main;

  if (main === '' || url === '') {
    return {
      href: '',
      success: false,
    };
  }

  const meta = `${cleanTags} ${url}`;
  const overallLength = main.length + meta.length;
  if (overallLength > maxCharacters) {
    const optimalLength =
      maxCharacters - (overallLength - maxCharacters + meta.length - 1);
    tweetMain = `${main.slice(0, optimalLength)}…`;
  }

  return {
    href: `${tweet}text=${tweetMain}&hashtags=${cleanTags}&url=${url}`,
    success: true,
  };
};

export default getTwitterButtonContent;
