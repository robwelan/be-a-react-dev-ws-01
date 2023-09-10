import React, { memo, useEffect, useState, useReducer } from 'react';
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
import { cases as arrayOfCases } from '../../constants/array-of-cases';
import { felonies as arrayOfFelonies01 } from '../../constants/array-of-felonies-01';
import getCombinedArrays from '../../utilities/get-combined-array';

const arrayOfFelonyCharges = [...arrayOfFelonies01];

const reducer = (state, action) => {
  if (action.type === 'height' && state.height === 0) {
    return { height: action.value };
  }
};

const Marquee = () => {
  const [heightMarquee, setHeightMarquee] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [state, dispatch] = useReducer(reducer, { height: 0 });
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

  //  height marquee effect
  useEffect(() => {
    if (mounted && state.height === 0) {
      dispatch({ type: 'height', value: heightMarquee });
    }
  }, [heightMarquee, mounted]);

  return (
    <>
      <Box
        className="marquee"
        sx={{
          '@keyframes marquee': {
            '0%': {
              top: '100px',
            },
            '100%': {
              top: mounted ? `-${state.height}px` : '-0px',
              // top: '-5000px',
            },
          },
        }}
      >
        <ContainerDimensions>
          {({ height }) => {
            if (state.height === 0) {
              setHeightMarquee(height);
            }

            return (
              <Box
                display="inline-block"
                style={{
                  height: `${height}px`,
                }}
              >
                {arrayOfFelonyCharges.map(
                  ({ caseId = 0, count = 0, what = '' }, index) => (
                    <p key={index}>{`${count}. ${what}`}</p>
                  ),
                )}
              </Box>
            );
          }}
        </ContainerDimensions>
      </Box>
    </>
  );
};

export default Marquee;
