import React from 'react';
//  chakra-ui
import { Box, Heading, Text, Button } from '@chakra-ui/react';
//  components
import Seo from '../components/seo';

const NotFoundPage = ({ location }) => {
  return (
    <>
      <Box textAlign="center" py={10} px={6}>
        <Heading
          display="inline-block"
          as="h2"
          size="2xl"
          bgGradient="linear(to-r, teal.400, teal.600)"
          backgroundClip="text"
        >
          404
        </Heading>
        <Text fontSize="18px" mt={3} mb={2}>
          Page Not Found
        </Text>
        <Text color={'gray.500'} mb={6}>
          The page you're looking for does not seem to exist
        </Text>

        <Button
          colorScheme="teal"
          bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
          color="white"
          variant="solid"
        >
          Go to Home
        </Button>
      </Box>
    </>
  );
};

export const Head = () => <Seo title="404: Not Found" />;

export default NotFoundPage;
