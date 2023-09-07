import React, { useEffect, useState } from 'react';
//  chakra-ui
import {
  Box,
  Heading,
  Image,
  List,
  ListItem,
  SimpleGrid,
} from '@chakra-ui/react';
import ContainerDimensions from 'react-container-dimensions';
//  cases
import { cases as arrayOfCases } from './constants/array-of-cases';
import { felonies as arrayOfFelonies01 } from './constants/array-of-felonies-01';
import getCombinedArrays from './utilities/get-combined-array';
//  images

//  styles
import './styles/index.css';
import './styles/marquee.css';

const arrayOfFelonyCharges = [...arrayOfFelonies01];

const ContentFelonyCountsDJT = () => {
  const [mounted, setMounted] = useState(false);
  const [spanHeight, setSpanHeight] = useState(0);
  const combinedFelonies = getCombinedArrays({
    headings: arrayOfCases,
    items: arrayOfFelonyCharges,
  });

  //  mounted effect
  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  return (
    <>
      <SimpleGrid
        className="grid-container"
        columns={{ xs: 1, sm: 2 }}
        spacing="40px"
      >
        <Box></Box>
        <Box>
          <Box className="marquee-wrapper">
            <Box
              className="marquee-block"
              style={{ height: `${spanHeight}px` }}
            >
              <Box className="marquee-inner to-top">
                <Box className="marquee-halfer">
                  {mounted && (
                    <ContainerDimensions>
                      {({ height }) => {
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
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default ContentFelonyCountsDJT;
