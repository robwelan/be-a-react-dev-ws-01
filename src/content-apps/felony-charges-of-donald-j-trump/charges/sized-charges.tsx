import React, { useEffect, useState, useRef } from 'react';
//  chakra-ui
import { Box } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
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
