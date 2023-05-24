import React from 'react';
//  chakra-ui
import { Heading } from '@chakra-ui/react';
//  components
import StandardDivider from '../../../../components/standard-divider';

const DisplayHeading = () => (
  <>
    <Heading align="center" as="h2" color="gray.500" size="xs">
      Classic Game
    </Heading>
    <Heading align="center" as="h1">
      Rock Paper Scissors
    </Heading>
    <StandardDivider marginBottom="1em" />
  </>
);

export default DisplayHeading;
