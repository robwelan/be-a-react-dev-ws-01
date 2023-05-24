import React from 'react';
//  chakra-ui
import { Divider } from '@chakra-ui/react';
//  constants
import colors from '../constants/colors';

interface Props {
  marginBottom?: string;
  marginTop?: string;
}

const StandardDivider = (props: Props) => {
  const { marginBottom = '1em', marginTop = '1em' } = props;

  return (
    <>
      <Divider
        borderColor={colors.brand.yellow}
        sx={{
          marginBottom: `${marginBottom} !important`,
          marginTop: `${marginTop} !important`,
        }}
      />
    </>
  );
};

export default StandardDivider;
