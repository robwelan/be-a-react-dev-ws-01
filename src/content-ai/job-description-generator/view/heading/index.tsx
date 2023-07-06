import React from 'react';
//  chakra-ui
import { Heading, VStack } from '@chakra-ui/react';

const ViewHeading = () => (
  <>
    <VStack gap={0}>
      <Heading as="h1" size="lg">
        Job Description Generator
      </Heading>
      <Heading as="h2" size="xs" marginTop="0.25em">
        Create a useful Job Description in moments
      </Heading>
      <Heading as="h2" size="xs">
        using artificial intelligence (AI).
      </Heading>
    </VStack>
  </>
);

export default ViewHeading;
