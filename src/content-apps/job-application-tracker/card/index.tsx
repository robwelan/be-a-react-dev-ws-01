import React from 'react';
//  chakra-ui
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Grid,
  GridItem,
  Heading,
  Stack,
} from '@chakra-ui/react';
//  local components
import StandardInput from './standard-input';

const JobCard = (props) => {
  const { fields, handler } = props;

  return (
    <Stack p={4} spacing={4}>
      <StandardInput field={fields.company} handler={handler} />
      <Heading as="h2" size="sm">
        Position
      </Heading>
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
        columnGap={{ base: 4 }}
        rowGap={{ base: 4 }}
      >
        <StandardInput
          as={GridItem}
          field={fields.position.contact}
          handler={handler}
        />

        <StandardInput
          as={GridItem}
          field={fields.position.title}
          handler={handler}
        />

        <StandardInput
          as={GridItem}
          field={fields.position.uri}
          handler={handler}
        />

        <StandardInput
          as={GridItem}
          field={fields.position.status}
          handler={handler}
        />
      </Grid>
    </Stack>
  );
};

export default JobCard;
