import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import random from 'random';
import {
  amazonAffiliateList01,
  amazonAffiliateList02,
  amazonAffiliateList03,
} from '../../../constants/affiliate-marketing-amazon/links';
import AffiliateLink from './affiliate-link';

const AmazonAffiliateLinks = () => {
  const length01 = amazonAffiliateList01.length - 1 || 0;
  const length02 = amazonAffiliateList02.length - 1 || 0;
  const length03 = amazonAffiliateList03.length - 1 || 0;
  const randomList01 = random.int(0, length01);
  const randomList02 = random.int(0, length02);
  const randomList03 = random.int(0, length03);

  const affiliateLink01 = amazonAffiliateList01[randomList01];
  const affiliateLink02 = amazonAffiliateList02[randomList02];
  const affiliateLink03 = amazonAffiliateList03[randomList03];

  return (
    <SimpleGrid columns={[1, null, 3]} spacing={4}>
      <Box>
        <AffiliateLink
          href={affiliateLink01.href}
          label={affiliateLink01.label}
        />
      </Box>
      <Box>
        <AffiliateLink
          href={affiliateLink02.href}
          label={affiliateLink02.label}
        />
      </Box>
      <Box>
        <AffiliateLink
          href={affiliateLink03.href}
          label={affiliateLink03.label}
        />
      </Box>
    </SimpleGrid>
  );
};

export default AmazonAffiliateLinks;
