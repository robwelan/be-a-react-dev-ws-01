//  constants
import {
  FORM_INPUT_TONE_NEUTRAL,
  FORM_INPUT_WORD_COUNT,
} from '../../content-ai/job-description-generator/constants';

type Payload = {
  industry: string;
  keywords: string;
  tone: string;
  title: string;
  words: number;
};

const getPrompt = (payload: Payload) => {
  const { industry, keywords, tone, title, words } = payload;

  return `${
    industry
      ? `Act as a hiring manager in the ${industry} industry.`
      : 'Act as a hiring manager.'
  } Write a job description for a ${title} role ${
    industry ? ` in the ${industry} industry` : ''
  } that is around ${words || FORM_INPUT_WORD_COUNT} words in length. Use a ${
    tone || FORM_INPUT_TONE_NEUTRAL
  } tone. ${
    keywords ? `Incorporate the following keywords: ${keywords}.` : ''
  } The job position should be described in a way that is SEO friendly, highlighting its unique features and benefits.`;
};

export default getPrompt;
