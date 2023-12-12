import React from 'react';
//  chakra-ui
import { As, Container, Divider, Heading } from '@chakra-ui/react';
//  recoil
import { useRecoilValue } from 'recoil';
//  constant types
import { Children } from '../../constants/types';
//  recoil state
import { siteConfiguration } from '../../state';
//  utilities
import getHeadingElementFontSize from '../../utilities/styles/get-heading-element-font-size';

type Props = {
  as?: As;
  children?: Children;
  title?: string;
};

const StandardPageContent = (props: Props) => {
  const { as = 'h1', children, title = 'What Is The Title?' } = props;
  const configuration = useRecoilValue(siteConfiguration);
  const { device } = configuration;
  const fontSize = getHeadingElementFontSize({ element: as });

  return (
    <Container maxW={device.container}>
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
