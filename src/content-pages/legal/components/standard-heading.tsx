import React from 'react';
//  chakra-ui
import { Heading } from '@chakra-ui/react';
//  utilities
import getHeadingElementFontSize from '../../../utilities/styles/get-heading-element-font-size';

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
  const fontSize = getHeadingElementFontSize({ element: as });

  return (
    <>
      <Heading
        as={as}
        fontSize={fontSize}
        id={id}
        marginTop={marginTop}
        sx={{ ...sx }}
      >
        {children}
      </Heading>
    </>
  );
};

export default StandardText;
