import React from 'react';
//  chakra-ui
import { Heading, VStack, Text } from '@chakra-ui/react';
//  constants
import linksToResources from '../../constants/resources-links';
//  local components
import ResourceCard from './resource-card';

const ContentResources = () => (
  <>
    <Heading as="h1" mb={4}>
      Resources
    </Heading>
    <Text mb={4}>Here you will find useful tools, frameworks, and references.</Text>
    <VStack spacing={4}>
      {linksToResources.map((link, index) => (
        <ResourceCard key={index} {...link} />
      ))}
    </VStack>
  </>
);

export default ContentResources;
