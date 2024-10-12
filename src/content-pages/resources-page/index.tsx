import React from 'react';
//  chakra-ui
import { Heading, VStack } from '@chakra-ui/react';
//  constants
import linksToResources from '../../constants/resources-links';
//  local components
import ResourceCard from './resource-card';

const ContentResources = () => (
  <>
    <Heading as="h1" mb={4}>
      Resources Used
    </Heading>
    <VStack spacing={4}>
      {linksToResources.map((link, index) => (
        <ResourceCard key={index} {...link} />
      ))}
    </VStack>
  </>
);

export default ContentResources;
