import React from 'react';
//  chakra-ui
import { Box, Center, Heading, SimpleGrid } from '@chakra-ui/react';
//  components
import PageCard from '../../components/page-card';
//  constants
import tutorials from '../../constants/page-links/tutorials';

const ContentTutorial = () => (
  <>
    <Center>
      <Heading as="h1" fontSize="140%">
        Tutorials at Be A React Dev
      </Heading>
    </Center>
    {tutorials && tutorials.length > 0 && (
      <>
        <Box sx={{ height: '1em' }} />
        <SimpleGrid columns={[1, null, 3]} spacing={4}>
          {tutorials.map((tutorial, index) => (
            <PageCard key={index} data={tutorial} />
          ))}
        </SimpleGrid>
      </>
    )}
  </>
);

export default ContentTutorial;
