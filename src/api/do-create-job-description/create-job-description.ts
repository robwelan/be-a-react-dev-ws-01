//  constants
import {
  CHAT_API_FREQUENCY_PENALTY,
  CHAT_API_MAX_TOKENS,
  CHAT_API_PRESENCE_PENALTY,
  CHAT_API_TEMPERATURE,
  CHAT_API_TOP_P,
} from './constants';
//  utilities
import getPrompt from './get-prompt';

type Payload = {
  industry: string;
  keywords: string;
  tone: string;
  title: string;
  words: number;
};

const createJobDescription = async (payload: Payload) => {
  const { industry, keywords, tone, title, words } = payload;

  try {
    const prompt = getPrompt({ industry, keywords, tone, title, words });

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.GATSBY_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        frequency_penalty: CHAT_API_FREQUENCY_PENALTY,
        max_tokens: CHAT_API_MAX_TOKENS,
        model: 'gpt-3.5-turbo',
        presence_penalty: CHAT_API_PRESENCE_PENALTY,
        prompt,
        temperature: CHAT_API_TEMPERATURE,
        top_p: CHAT_API_TOP_P,
      }),
    });
    const data = await response.json();

    if (data.hasOwnProperty('error')) {
      return data.error.message;
    }

    return data.choices[0].text;
  } catch (err) {
    console.error(err);
  }
};

export default createJobDescription;
