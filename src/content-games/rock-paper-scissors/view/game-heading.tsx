import React from 'react';
//  chakra-ui
import { Heading } from '@chakra-ui/react';
//  components
import StandardDivider from '../../../components/standard-divider';

const DisplayHeading = () => (
  <>
    <Heading
      as="h2"
      fontSize="125%"
      color="gray.500"
      textAlign="center"
    >
      Classic Game
    </Heading>
    <Heading as="h1" fontSize="130%" textAlign="center">
      Rock Paper Scissors
    </Heading>
    <StandardDivider marginBottom="1em" />
  </>
);

export default DisplayHeading;
