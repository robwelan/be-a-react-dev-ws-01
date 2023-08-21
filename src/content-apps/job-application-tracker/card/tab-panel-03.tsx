import React from 'react';
//  chakra-ui
import { Box, Grid, GridItem, Stack, TabPanel } from '@chakra-ui/react';
//  local components
import StandardInput from './standard-input';
import { PropsMain } from './interfaces-and-types';

const TabPanelThree = (props: PropsMain) => {
  const { fields, handler } = props;
  const { interviews } = fields;

  return (
    <TabPanel>
      <Stack spacing={4}>
        <Box>here?</Box>
      </Stack>
    </TabPanel>
  );
};

export default TabPanelThree;
