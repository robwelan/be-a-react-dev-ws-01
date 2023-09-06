import React, { useEffect, useState } from 'react';
//  chakra-ui
import { Box, Image, List, ListItem, SimpleGrid } from '@chakra-ui/react';
import ContainerDimensions from 'react-container-dimensions';
//  cases
import { arrayOfCases } from './array-of-cases';
import { arrayOfFelonyCharges as arrayOfFelonyCharges01 } from './array-of-felony-charges-01';
//  styles
import './index.css';
import './marquee.css';

/*
  TODO:
  https://codesandbox.io/s/github/rcbyr/keen-slider-sandboxes/tree/v6/misc/adaptive-height/react?file=/src/App.js
*/

const arrayOfFelonyCharges = [...arrayOfFelonyCharges01];

const ContentFelonyCountsDJT = () => {
  const [spanHeight, setSpanHeight] = useState(0);

  return (
    <>
      <SimpleGrid
        className="grid-container"
        columns={{ xs: 1, sm: 2 }}
        spacing="40px"
      >
        <Box></Box>
        <Box>
          <div className="marquee-wrapper">
            <div
              className="marquee-block"
              style={{ height: `${spanHeight}px` }}
            >
              <div className="marquee-inner to-top">
                <span>
                  <ContainerDimensions>
                    {({ width, height }) => {
                      setSpanHeight(height * 1.3);

                      return (
                        <>
                          {arrayOfFelonyCharges.map(
                            ({ caseId = 0, count = 0, what = '' }, index) => (
                              <div className="marquee-item" key={index}>
                                {`${count}. ${what}`}
                              </div>
                            ),
                          )}
                        </>
                      );
                    }}
                  </ContainerDimensions>
                </span>
              </div>
            </div>
          </div>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default ContentFelonyCountsDJT;
