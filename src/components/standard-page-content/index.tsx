import React from 'react';
//  chakra-ui
import { Container, Divider, Heading } from '@chakra-ui/react';
//  constant types
import { Children } from '../../constants/types';
//  hooks
import useDeviceSize from '../../hooks/use-device-size';
//  utilities
import getHeadingElementFontSize from '../../utilities/styles/get-heading-element-font-size';

type Props = {
  as?: string;
  children?: Children;
  title?: string;
};

const StandardPageContent = (props: Props) => {
  const { as = 'h1', children, title = 'What Is The Title?' } = props;
  const deviceSize = useDeviceSize();
  const fontSize = getHeadingElementFontSize({ element: as });

  return (
    <Container maxW={deviceSize.container}>
      <>
        <Heading as={as} fontSize={fontSize}>
          {title}
        </Heading>
        <Divider borderColor="#FFDE59" marginBottom="2em" marginTop="1em" />
        {children}
      </>
    </Container>
  );
};

export default StandardPageContent;
