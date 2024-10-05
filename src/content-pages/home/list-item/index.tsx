import React, { ElementType } from 'react';
//  chakra-ui
import {
  Box,
  Heading,
  HStack,
  Icon,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
//  gatsbyjs
import { Link as GatsbyLink } from 'gatsby';

type ContentListItemProps = {
  description: string;
  icon?: ElementType;
  name: string;
  route: string;
};

const ContentListItem = (props: ContentListItemProps) => {
  const { description, icon, name, route } = props;

  return (
    <Link
      as={GatsbyLink}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
      to={route}
    >
      <VStack align="stretch">
        <HStack>
          <Box
            display="flex"
            alignItems="center"
            p={2}
            borderRadius="lg"
            cursor="pointer"
          >
            {icon && (
              <Icon
                as={icon}
                boxSize={6}
                mr={4}
                _groupHover={{
                  color: 'white',
                }}
              />
            )}
          </Box>
          <Heading size="md">{name}</Heading>
        </HStack>

        <HStack spacing={4}>
          <Box display="flex" boxSize={4} mr="3" />
          <Box ml={8}>
            <Text>{description}</Text>
          </Box>
        </HStack>
      </VStack>
    </Link>
  );
};

export default ContentListItem;
