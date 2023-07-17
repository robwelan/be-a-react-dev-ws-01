import React from 'react';
//  chakra-ui
import { Grid, GridItem } from '@chakra-ui/react';
//  view
import ViewForm from '../form';
import ViewOutput from '../output';

const MainView = () => {
  const columns = 2;

  return (
    <Grid templateColumns={`repeat(${columns}, 1fr)`} gap={6}>
      <GridItem w="100%">
        <ViewForm />
      </GridItem>
      <GridItem w="100%">
        <ViewOutput />
      </GridItem>
    </Grid>
  );
};

export default MainView;
