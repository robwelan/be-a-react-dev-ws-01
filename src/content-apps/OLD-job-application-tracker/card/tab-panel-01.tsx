import React from 'react';
//  chakra-ui
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Stack,
  TabPanel,
} from '@chakra-ui/react';
//  local components
import StandardInput from './standard-input';
import { PropsMain } from './interfaces-and-types';

const TabPanelOne = (props: PropsMain) => {
  const { fields, handler } = props;

  return (
    <TabPanel>
      <Stack spacing={4}>
        <StandardInput field={fields.company} handler={handler} />
        <Box>
          <Heading as="h2" marginBottom="0.8em" size="sm">
            Position
          </Heading>
          <Grid
            templateColumns={{
              base: 'repeat(1, 1fr)',
              md: 'repeat(4, 1fr)',
            }}
            columnGap={{ base: 4 }}
            rowGap={{ base: 4 }}
          >
            <StandardInput
              as={GridItem}
              field={fields.position.status}
              handler={handler}
            />

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
          </Grid>
        </Box>
        <Box>
          <Heading as="h2" marginBottom="0.8em" size="sm">
            Important Dates
          </Heading>

          <Grid
            templateColumns={{
              base: 'repeat(1, 1fr)',
              md: 'repeat(4, 1fr)',
            }}
            columnGap={{ base: 4 }}
            rowGap={{ base: 4 }}
          >
            <StandardInput
              as={GridItem}
              field={fields.dates.found}
              handler={handler}
            />

            <StandardInput
              as={GridItem}
              field={fields.dates.deadline}
              handler={handler}
            />

            <StandardInput
              as={GridItem}
              field={fields.dates.applied}
              handler={handler}
            />

            <StandardInput
              as={GridItem}
              field={fields.dates.followup}
              handler={handler}
            />
          </Grid>
        </Box>
      </Stack>
    </TabPanel>
  );
};

export default TabPanelOne;
