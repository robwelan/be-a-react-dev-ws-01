import React from 'react';
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
} from '@chakra-ui/react';
//  types
import { TypeEmoji } from '../../state/types';
//  styles
import './styles.css';

type Payload = {
  emoji: TypeEmoji;
};

const ViewEmoji = (payload: Payload) => {
  const { emoji } = payload;
  const { glyph, group, name, subgroup } = emoji;

  return (
    <Card>
      <CardHeader>
        <Heading size="md">{name}</Heading>
      </CardHeader>

      <CardBody>
        <Box
          className="emoji-box"
          sx={{
            '&::before': {
              content: `"${glyph}"`,
            },
          }}
        ></Box>
        <Text>
          <strong>Group</strong>: {group}
        </Text>
        <Text>
          <strong>sub-Group</strong>: {subgroup}
        </Text>
      </CardBody>
    </Card>
  );
};

export default ViewEmoji;
