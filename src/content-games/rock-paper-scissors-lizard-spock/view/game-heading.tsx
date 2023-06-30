import React from 'react';
//  chakra-ui
import { Heading, IconButton, useDisclosure } from '@chakra-ui/react';
//  chakra-ui icons
import { QuestionOutlineIcon } from '@chakra-ui/icons';
//  components
import StandardDivider from '../../../components/standard-divider';
//  local components
import GameHelp from './help';

const DisplayHeading = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <GameHelp isOpen={isOpen} onClose={onClose} />
      <Heading as="h2" color="gray.500" size="xs" textAlign="center">
        Classic Yet Modern Game
      </Heading>
      <Heading as="h1" textAlign="center">
        Rock Paper Scissors Lizard Spock{' '}
        <IconButton
          aria-label="help"
          icon={<QuestionOutlineIcon />}
          onClick={onOpen}
        />
      </Heading>
      <StandardDivider marginBottom="1em" />
    </>
  );
};

export default DisplayHeading;
