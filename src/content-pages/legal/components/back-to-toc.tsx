import React from 'react';
//  chakra-ui
import { Link, Text } from '@chakra-ui/react';

const BackToTOC = () => (
  <>
    <Text fontSize="sm" marginTop="0.25em">
      <Link href="#tableofcontents">
        <strong>back to table of contents</strong>
      </Link>
    </Text>
  </>
);

export default BackToTOC;
