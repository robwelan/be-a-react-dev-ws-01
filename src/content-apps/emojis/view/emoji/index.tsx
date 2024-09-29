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
    <Box height="100%" width="100%" p={4}>
      <Card border="1px solid" borderColor="gray.200" shadow="none" h="100%">
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
    </Box>
  );
};

export default ViewEmoji;
