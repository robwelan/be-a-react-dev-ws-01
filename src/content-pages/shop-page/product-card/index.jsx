import React from 'react';
//  chakra-ui
import { Box, Center, Image, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const ProductCard = (props) => {
  const { data = {} } = props;
  const { asset = {}, name = '' } = data;
  const { image = {}, uri = '' } = asset;
  const { alt = '', src = '' } = image;

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Link href={uri} isExternal>
        {src !== '' && (
          <>
            <Image alt={alt} src={src} />
          </>
        )}
        <Box alignItems="center" display="flex" justifyContent="center" p={2}>
          {name !== '' && (
            <>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textAlign="center"
                textTransform="uppercase"
              >
                {name}&nbsp;<ExternalLinkIcon />
              </Box>
            </>
          )}
        </Box>
      </Link>
    </Box>
  );
};

export default ProductCard;
