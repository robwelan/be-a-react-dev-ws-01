import React, { ReactNode } from 'react';
//  chakra-ui
import { Text } from '@chakra-ui/react';

type Props = {
  children: Element | string | Array<ReactNode>;
  fontSize?: string;
  marginTop?: string;
};

const StandardText = (props: Props) => {
  const { children, fontSize = 'md', marginTop = '0.5em' } = props;

  return (
    <>
      <Text fontSize={fontSize} marginTop={marginTop}>
        {children}
      </Text>
    </>
  );
};

export default StandardText;
