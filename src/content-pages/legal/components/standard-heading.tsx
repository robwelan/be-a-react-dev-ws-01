import React from 'react';
//  chakra-ui
import { Heading } from '@chakra-ui/react';

type Props = {
  children: string;
  as?: string | undefined | any;
  id?: string;
  marginTop?: string;
  size?: string;
  sx?: object;
};

const StandardText = (props: Props) => {
  const {
    children,
    as = 'h2',
    id = '',
    marginTop = '1em',
    size = 'md',
    sx = {},
  } = props;

  return (
    <>
      <Heading as={as} id={id} marginTop={marginTop} size={size} sx={{ ...sx }}>
        {children}
      </Heading>
    </>
  );
};

export default StandardText;
