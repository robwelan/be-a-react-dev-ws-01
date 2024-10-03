import React from 'react';
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Divider,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
//  components
import CopyToClipboard from '../../../../components/copy-to-clipboard';
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
          <Center>
            <HStack spacing={4}>
              <Box className="contain-emoji-box">
                <Box
                  className="emoji-box"
                  sx={{
                    '&::before': {
                      content: `"${glyph}"`,
                    },
                  }}
                ></Box>
              </Box>
              <Box className="copy-to-clipboard">
                <CopyToClipboard
                  ariaLabel={`Copy ${name} ${glyph} to the clipboard`}
                  value={glyph}
                />
              </Box>
            </HStack>
          </Center>
        </CardBody>
        <CardFooter>
          <VStack align="left">
            <Divider />
            <Box>
              <Text>
                <b>Group</b>: {group}
              </Text>
            </Box>
            <Box>
              <Text>
                <b>sub-Group</b>: {subgroup}
              </Text>
            </Box>
          </VStack>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default ViewEmoji;
