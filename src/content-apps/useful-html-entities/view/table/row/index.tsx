import React from 'react';
//  chakra-ui
import { Box, HStack, Tr, Td } from '@chakra-ui/react';
//  local components
import CopyToClipboard from '../../../../../components/copy-to-clipboard';

type Footnote = {
  key: string;
  value: number;
};

type Props = {
  entity: {
    alphanumeric: string;
    character: string;
    footnotes: Array<Footnote>;
    literal: string;
    unicode: string;
    preferredTo: string;
    type: string;
  };
};

const TableRow = (props: Props) => {
  const { entity } = props;
  const {
    alphanumeric,
    character,
    footnotes,
    literal,
    unicode,
    preferredTo,
    type,
  } = entity;

  return (
    <Tr>
      <Td>
        <HStack spacing={0}>
          <Box>{character}</Box>
          {footnotes &&
            footnotes.length > 0 &&
            footnotes.map((footnote, index) => (
              <Box
                key={footnote.key}
                sx={{
                  position: 'relative',
                  marginLeft: index === 0 ? '0.2em' : '',
                  top: '-0.5em',
                  fontSize: '80%',
                }}
              >
                {index > 0 ? ', ' : ''}
                {footnote.value}
              </Box>
            ))}
        </HStack>
      </Td>
      <Td>
        {literal}{' '}
        <CopyToClipboard
          ariaLabel={`Copy the literal entity of "${character}" to the clipboard`}
          value={literal}
        />
      </Td>
      <Td>
        {alphanumeric}{' '}
        <CopyToClipboard
          ariaLabel={`Copy the alphanumeric entity of "${character}" to the clipboard`}
          value={alphanumeric}
        />
      </Td>
      <Td>
        {unicode}{' '}
        <CopyToClipboard
          ariaLabel={`Copy the unicode entity of "${character}" to the clipboard`}
          value={unicode}
        />
      </Td>
      <Td>{preferredTo}</Td>
      <Td>{type}</Td>
    </Tr>
  );
};

export default TableRow;
