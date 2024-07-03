const getTotalEmojisText = (payload) => {
  const { filtered, emojisDictionary, emojisFiltered } = payload;
  const totalEmojis = emojisDictionary.length;

  if (filtered) {
    return `Found ${emojisFiltered.length} of ${totalEmojis}`;
  }

  return `Total emjois: ${totalEmojis}`;
};

export default getTotalEmojisText;
