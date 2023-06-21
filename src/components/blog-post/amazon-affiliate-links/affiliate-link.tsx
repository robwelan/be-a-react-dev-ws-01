import React from 'react';
import { Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

interface Props {
  href: string;
  label: string;
}

const AffiliateLink = (props: Props) => {
  const { href = '', label = '' } = props;

  return (
    <Link href={href} isExternal fontSize="xs">
      {label} <ExternalLinkIcon mx="2px" />
    </Link>
  );
};

export default AffiliateLink;
