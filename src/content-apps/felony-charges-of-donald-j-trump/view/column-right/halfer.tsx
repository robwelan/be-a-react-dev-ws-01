import React, { Suspense, useEffect, useState } from 'react';
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
//  recoil
import { useRecoilState } from 'recoil';
//  cases
import { cases as arrayOfCases } from '../../constants/array-of-cases';
import { felonies as arrayOfFelonies01 } from '../../constants/array-of-felonies-01';
import getCombinedArrays from '../../utilities/get-combined-array';
//  state
import { felonyHeight } from '../../state';

const arrayOfFelonyCharges = [...arrayOfFelonies01];

const Halfer = () => {
  const [mounted, setMounted] = useState(false);
  const [valueFelonyHeight, setValueFelonyHeight] =
    useRecoilState(felonyHeight);
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

  if (!mounted) return null;

  return (
    <>
      <Box className="marquee-halfer">
        <Suspense>
          <ContainerDimensions>
            {({ height }) => {
              if (valueFelonyHeight === 0) {
                setValueFelonyHeight(height * 1.3);
              }

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
        </Suspense>
      </Box>
    </>
  );
};

export default Halfer;
