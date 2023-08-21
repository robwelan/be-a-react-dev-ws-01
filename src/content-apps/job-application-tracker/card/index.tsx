import React from 'react';
//  chakra-ui
import { Tabs, TabList, TabPanels, Tab } from '@chakra-ui/react';
//  local components
import TabPanelOne from './tab-panel-01';
import TabPanelTwo from './tab-panel-02';
import TabPanelThree from './tab-panel-03';
//  interfaces and types
import { PropsMain } from './interfaces-and-types';
//  styles
import 'react-quill/dist/quill.snow.css';

const JobCard = (props: PropsMain) => {
  const { fields, handler } = props;

  return (
    <>
      <Tabs size="md" variant="enclosed">
        <TabList>
          <Tab>Basics</Tab>
          <Tab>Details</Tab>
          <Tab>Interviews</Tab>
        </TabList>

        <TabPanels
          borderWidth="1px"
          borderBottomLeftRadius="lg"
          borderBottomRightRadius="lg"
        >
          <TabPanelOne fields={fields} handler={handler} />
          <TabPanelTwo fields={fields} handler={handler} />
          <TabPanelThree fields={fields} handler={handler} />
        </TabPanels>
      </Tabs>
    </>
  );
};

export default JobCard;
