import React, { Fragment } from 'react';
//  chakra-ui
import { Heading, Text } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import getCombinedArrays from '../utilities/get-combined-array';

const combinedFelonies = getCombinedArrays();

const Charges = () => (
  <>
    {combinedFelonies.map((indictment, indictmentIndex) => {
      const {
        case: caseAgainst = 0,
        headline = '',
        list = [],
        type = '',
      } = indictment;

      if (type === 'heading') {
        return (
          <Fragment key={indictmentIndex}>
            <Heading as="h2">{caseAgainst}</Heading>
            <Heading as="h3">{headline}</Heading>
            {list.map((felony, felonyIndex) => {
              const { count = 0, show = {}, what = '' } = felony;
              const { count: showCount = true } = show;
              const indexOfIndictmentAndFelony = `${indictmentIndex}_${felonyIndex}`;

              return (
                <Fragment key={indexOfIndictmentAndFelony}>
                  {showCount && <Text>{`${count}. ${what}`}</Text>}
                  {!showCount && <Text align="center">{`${what}`}</Text>}
                </Fragment>
              );
            })}
          </Fragment>
        );
      }
    })}
  </>
);

export default Charges;
