import React from 'react';
//  chakra-ui
import { Heading } from '@chakra-ui/react';
//  components
import StandardDivider from '../../../components/standard-divider';

const DisplayHeading = () => (
  <>
    <Heading as="h2" color="gray.500" size="xs" textAlign="center">
      Classic Game
    </Heading>
    <Heading as="h1" textAlign="center">
      Rock Paper Scissors
    </Heading>
    <StandardDivider marginBottom="1em" />
  </>
);

export default DisplayHeading;
