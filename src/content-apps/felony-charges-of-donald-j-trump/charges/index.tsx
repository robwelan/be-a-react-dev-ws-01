import React, { Fragment } from 'react';
//  chakra-ui
import { Heading, Text } from '@chakra-ui/react';
import getCombinedArrays from '../utilities/get-combined-array';

const combinedFelonies = getCombinedArrays();

const Charges = () => (
  <>
    {combinedFelonies.map(
      (
        { case: caseAgainst = 0, headline = '', list = [], type = '' },
        index,
      ) => {
        if (type === 'heading') {
          return (
            <Fragment key={index}>
              <Heading as="h2">{caseAgainst}</Heading>
              <Heading as="h3">{headline}</Heading>
              {list.map(({ count = 0, what = '' }, index) => (
                <Text key={index}>{`${count}. ${what}`}</Text>
              ))}
            </Fragment>
          );
        }
      },
    )}
  </>
);

export default Charges;
