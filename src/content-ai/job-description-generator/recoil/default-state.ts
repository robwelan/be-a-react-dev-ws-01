//  constants
import { FORM_INPUT_TONE_NEUTRAL, FORM_INPUT_WORD_COUNT } from '../constants';

const state = {
  arrays: {
    keywords: [],
  },
  booleans: {
    isCopied: false,
    isGenerating: false,
  },
  numbers: {
    words: FORM_INPUT_WORD_COUNT,
  },
  strings: {
    description: '',
    industry: '',
    title: '',
    tone: FORM_INPUT_TONE_NEUTRAL,
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
