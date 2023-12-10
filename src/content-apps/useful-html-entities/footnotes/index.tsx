import React from 'react';
//  chakra-ui
import { Heading, OrderedList } from '@chakra-ui/react';
//  recoil
import { useRecoilValue } from 'recoil';
//  local components
import ListItem from './list-item';
//  state
import { htmlEntitiesFootnotesState } from '../state/atoms';

const Footnotes = () => {
  const state = useRecoilValue(htmlEntitiesFootnotesState);

  if (state.footnotes && state.footnotes.length > 0) {
    return (
      <>
        <Heading as="h2" fontSize="120%">
          Footnotes
        </Heading>
        <OrderedList>
          {state.footnotes &&
            state.footnotes.length > 0 &&
            state.footnotes.map((footnote) => (
              <ListItem key={footnote.key} footnote={footnote} />
            ))}
        </OrderedList>
      </>
    );
  }

  return null;
};

export default Footnotes;
