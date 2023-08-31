import React from 'react';
//  chakra-ui
import { Box, Grid, GridItem, Stack, TabPanel } from '@chakra-ui/react';
//  local components
import StandardInput from './standard-input';
import { PropsMain } from './interfaces-and-types';

const TabPanelTwo = (props: PropsMain) => {
  const { fields, handler } = props;

  return (
    <TabPanel>
      <Stack spacing={4}>
        <Box>
          <Grid
            templateColumns={{
              base: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
            }}
            columnGap={{ base: 4 }}
            rowGap={{ base: 4 }}
          >
            <StandardInput
              as={GridItem}
              field={fields.position.description}
              handler={handler}
            />

            <StandardInput
              as={GridItem}
              field={{
                ...fields.position.keywords,
                type: {
                  ...fields.position.keywords.type,
                  display: 'list',
                },
              }}
              handler={handler}
            />
          </Grid>
        </Box>
        <Box>
          <StandardInput
            as={GridItem}
            field={fields.position.notes}
            handler={handler}
          />
        </Box>
      </Stack>
    </TabPanel>
  );
};

export default TabPanelTwo;
