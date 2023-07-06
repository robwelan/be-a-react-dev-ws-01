const state = {
  arrays: {
    keywords: [],
  },
  booleans: {
    isCopied: false,
    isGenerating: false,
  },
  numbers: {
    words: 100,
  },
  strings: {
    description: '',
    industry: '',
    title: '',
    tone: 'default',
  },
  validation: {
    touched: false,
    arrays: {
      keywords: true,
    },
    numbers: {
      words: true,
    },
    strings: {
      description: true,
      industry: true,
      title: true,
      tone: true,
    },
  },
};

export default state;
