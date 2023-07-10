import React from 'react';
//  chakra-ui
import { Button, ButtonGroup } from '@chakra-ui/react';
//  react icons
import { GiArtificialIntelligence } from '@react-icons/all-files/gi/GiArtificialIntelligence';
//  acctions
import doSetIsGenerating from '../../actions/do-set-is-generating';

const CreateJobDescription = (props) => {
  const { setState, state } = props;
  const { booleans } = state;
  const { isGenerating } = booleans;

  const handleSubmit = async (e) => {
    e.preventDefault();

    doSetIsGenerating({ setState, value: true });

    const res = await fetch('/api/do-create-job-description', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jobTitle,
        industry,
        keyWords,
        tone,
        numWords,
      }),
    });

    doSetIsGenerating({ setState, value: false });

    const data = await res.json();
    setJobDescription(data.jobDescription.trim());
  };

  return (
    <Button
      leftIcon={<GiArtificialIntelligence />}
      colorScheme="blue"
      isLoading={isGenerating}
    >
      {isGenerating
        ? 'Creating job description now...'
        : 'Create Job Description'}
    </Button>
  );
};

export default CreateJobDescription;
