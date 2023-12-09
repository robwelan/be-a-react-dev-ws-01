import React from 'react';
//  chakra-ui
import { Heading, OrderedList } from '@chakra-ui/react';
//  constants
import footnotes from '../constants/footnotes';
//  local components
import ListItem from './list-item';

const Footnotes = () => {
  if (footnotes && footnotes.length > 0) {
    return (
      <>
        <Heading as="h2" fontSize="120%">
          Footnotes
        </Heading>
        <OrderedList>
          {footnotes &&
            footnotes.length > 0 &&
            footnotes.map((footnote) => (
              <ListItem key={footnote.key} footnote={footnote} />
            ))}
        </OrderedList>
      </>
    );
  }

  return null;
};

export default Footnotes;
