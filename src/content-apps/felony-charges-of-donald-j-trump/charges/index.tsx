import React, { Fragment } from 'react';
//  chakra-ui
import { Heading, Text } from '@chakra-ui/react';
//  cases
import { cases as arrayOfCases } from '../constants/array-of-cases';
import { felonies as arrayOfFelonies01 } from '../constants/array-of-felonies-01';
import getCombinedArrays from '../utilities/get-combined-array';

const combinedFelonies = getCombinedArrays({
  headings: arrayOfCases,
  items: [...arrayOfFelonies01],
});

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
