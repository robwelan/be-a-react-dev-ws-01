import React from 'react';
import { ReactElement } from 'react';
//  chakra-ui
import { Flex, Stack, Text } from '@chakra-ui/react';

interface FeatureProps {
  text: {
    color: string;
    value: string;
  };
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  const { color, value } = text;

  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text color={color} fontWeight={600}>
        {value}
      </Text>
    </Stack>
  );
};

export default Feature;
