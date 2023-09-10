import React, {
  memo,
  useCallback,
  useEffect,
  useState,
  useReducer,
  useRef,
} from 'react';
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
import { useRecoilState } from 'recoil';
//  cases
import { cases as arrayOfCases } from '../constants/array-of-cases';
import { felonies as arrayOfFelonies01 } from '../constants/array-of-felonies-01';
import getCombinedArrays from '../utilities/get-combined-array';
//  state
import { felonyHeight } from '../state';

const SizedOutput = (props) => {
  const { children } = props;
  const [height, setHeight] = useState(0);
  const [state, setState] = useRecoilState(felonyHeight);
  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.clientHeight * 1);
  });

  useEffect(() => {
    if (state === 0 && height > 0) {
      setState(height * 1.5);
    }
  }, [height, state]);

  return (
    <>
      <div style={{ visibility: 'hidden' }}>
        <div ref={ref}>
          <Box
            display="inline-block"
            style={{
              height: `${height}px`,
            }}
          >
            {children}
          </Box>
        </div>
      </div>
    </>
  );
};

export default SizedOutput;
