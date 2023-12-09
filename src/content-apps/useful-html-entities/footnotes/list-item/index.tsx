import React from 'react';
//  chakra-ui
import { Link, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

type Props = {
  footnote: {
    notes: string;
    reference: string;
  };
};

const TheListItem = (props: Props) => {
  const { footnote } = props;
  const { notes, reference } = footnote;

  return (
    <ListItem>
      {notes}{' '}
      <Link href={reference} isExternal>
        Follow this link for more <ExternalLinkIcon mx="2px" />.
      </Link>
    </ListItem>
  );
};

export default TheListItem;
