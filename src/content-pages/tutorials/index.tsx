import React from 'react';
//  chakra-ui
import { Box, Center, Heading, SimpleGrid } from '@chakra-ui/react';
//  local components
import PageCard from '../../components/page-card';
//  local constants
import tutorials from './constants/tutorials';

const ContentTutorial = () => (
  <>
    <Center>
      <Heading as="h1" fontSize="140%">
        Tutorials at Be A React Dev
      </Heading>
    </Center>
    <Box sx={{ height: '1em' }} />
    <SimpleGrid columns={[1, null, 3]} spacing={4}>
      {tutorials.map((tutorial) => (
        <PageCard data={tutorial} />
      ))}
    </SimpleGrid>
  </>
);

export default ContentTutorial;
