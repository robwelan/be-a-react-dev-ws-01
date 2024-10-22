import React from 'react';
//  chakra-ui
import { Box, Heading, Text } from '@chakra-ui/react';

const Introduction = () => (
  <>
    <Heading as="h1" mb={4}>
      Welcome To Our Store!
    </Heading>
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" mb={4} p={4}>
      <Text>
        We’re so excited to have you here and we are so deeply grateful!
      </Text>
      <Text>
        Every purchase you make directly supports the creation of more in-depth
        tutorials, helpful resources, and engaging content for developers like
        you.
      </Text>
      <Text>
        Your support allows us to keep pushing forward and growing this
        community.
      </Text>
      <Text>
        Whether you’re a beginner or a seasoned pro, we hope our content helps
        you on your React journey!
      </Text>
      <Text>Thank you for being part of our mission and happy coding!</Text>
    </Box>
  </>
);

export default Introduction;
