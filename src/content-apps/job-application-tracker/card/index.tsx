import React from 'react';
//  chakra-ui
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
} from '@chakra-ui/react';
//  local components
import StandardInput from './standard-input';

const JobCard = (props) => {
  const { fields, handler } = props;

  return (
    <Stack spacing={4}>
      <StandardInput field={fields.company} handler={handler} />
      <StandardInput field={fields.position.contact} handler={handler} />
      <StandardInput field={fields.position.title} handler={handler} />
    </Stack>
  );
};

export default JobCard;
