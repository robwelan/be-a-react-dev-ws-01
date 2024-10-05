import React from 'react';
//  chakra-ui
import {
  Card,
  CardHeader,
  CardBody,
  Center,
  Heading,
  Icon,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
//  gatsby
import { Link as GatsbyLink } from 'gatsby';

type Props = {
  data: {
    description: string;
    icon: any;
    name: string;
    route: string;
  };
};

const PageCard = (props: Props) => {
  const { data } = props;
  const { description, icon: CardIcon, name, route } = data;

  return (
    <>
      <Card maxW="xs">
        <Link as={GatsbyLink} to={route}>
          <CardHeader m={0} p={0}>
            <Center>
              <Icon as={CardIcon} h="6em" w="6em" />
            </Center>
          </CardHeader>
          <CardBody>
            <Stack>
              <Heading size="md">{name}</Heading>
              <Text>{description}</Text>
            </Stack>
          </CardBody>
        </Link>
      </Card>
    </>
  );
};

export default PageCard;
