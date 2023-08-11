import React from 'react';
//  chakra-ui
import { Box, Image, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const ProductCard = (props) => {
  const { data = {} } = props;
  const {
    description = '',
    image = {},
    link = '',
    name = '',
    uri = '',
    why = '',
  } = data;
  const { alt = '', src = null } = image;

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Link href={uri} isExternal>
        {src && (
          <>
            <Image alt={alt} src={src} />
          </>
        )}
        <Box p={4} w="100%">
          {name !== '' && (
            <>
              <Box alignItems="baseline" display="flex" w="100%">
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textAlign="center"
                  textTransform="uppercase"
                  wordwrap="break-word"
                  ml="2"
                  w="100%"
                >
                  {name} <ExternalLinkIcon />
                </Box>
              </Box>
            </>
          )}
        </Box>
      </Link>
    </Box>
  );
};

export default ProductCard;
