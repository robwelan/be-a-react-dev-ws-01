const getTotalEmojisText = (payload) => {
  const { filtered, emojisDictionary, emojisFiltered, processed } = payload;
  const totalEmojis = emojisDictionary.length;

  if (!processed) return '';

  if (filtered) {
    return `Found ${emojisFiltered.length} of ${totalEmojis}`;
  }

  return `Total emjois: ${totalEmojis}`;
};

export default getTotalEmojisText;
