import React from 'react';
//  chakra ui
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorMode,
} from '@chakra-ui/react';

type TypeResourceCarProps = {
  about: string;
  href: string;
  image: {
    alt?: string;
    src: { dark: string; light: string };
  };
  name: string;
};

const ResourceCard = (props: TypeResourceCarProps) => {
  const { about, href, image, name } = props;
  const { alt = '', src } = image;
  const { colorMode } = useColorMode();

  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
      width="100%"
    >
      <Image boxSize="80px"  p={4} src={src[colorMode]} alt={alt} />

      <Stack>
        <CardBody>
          <Heading size="md">{name}</Heading>

          <Text py="2">{about}</Text>
        </CardBody>

        <CardFooter>
          <Button
            as={Link}
            variant="outline"
            colorScheme="blue"
            href={href}
            isExternal
          >
            Check it out
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default ResourceCard;
