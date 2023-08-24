import React from 'react';
//  chakra-ui
import { Heading, VStack } from '@chakra-ui/react';

const ViewHeading = () => (
  <>
    <VStack gap={0}>
      <Heading as="h1" fontSize="130%">
        Job Description Generator
      </Heading>
      <Heading as="h2" fontSize="125%" marginTop="0.25em">
        Create a useful Job Description in moments
      </Heading>
      <Heading as="h4" fontSize="105%">
        using artificial intelligence (AI).
      </Heading>
    </VStack>
  </>
);

export default ViewHeading;
