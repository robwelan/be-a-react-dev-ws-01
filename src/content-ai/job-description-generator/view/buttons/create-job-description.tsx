import React from 'react';
//  chakra-ui
import { Button } from '@chakra-ui/react';
//  react icons
import { GiArtificialIntelligence } from '@react-icons/all-files/gi/GiArtificialIntelligence';
//  actions
import doSetIsGenerating from '../../actions/do-set-is-generating';
import setStateKeyValue from '../../actions/set-state-key-string-value';

const CreateJobDescription = (props) => {
  const { setState, state } = props;
  const { booleans } = state;
  const { isGenerating } = booleans;

  const handleSubmit = async (e) => {
    const { arrays, numbers, strings } = state;
    const { keywords } = arrays;
    const { words } = numbers;
    const { industry, title, tone } = strings;

    e.preventDefault();

    doSetIsGenerating({ setState, value: true });

    const res = await fetch('/api/do-create-job-description', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        industry,
        keywords: keywords.join(', '),
        tone,
        title,
        words,
      }),
    });

    doSetIsGenerating({ setState, value: false });

    const data = await res.json();

    setStateKeyValue({
      key: 'strings.description',
      setState,
      value: data.jobDescription.trim(),
    });
  };

  return (
    <Button
      leftIcon={<GiArtificialIntelligence />}
      colorScheme="blue"
      isLoading={isGenerating}
      onClick={handleSubmit}
    >
      {isGenerating
        ? 'Creating job description now...'
        : 'Create Job Description'}
    </Button>
  );
};

export default CreateJobDescription;
