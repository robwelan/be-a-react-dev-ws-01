import React from 'react';
//  chakra-ui
import {
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Grid,
  GridItem,
  Heading,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
//  local components
import StandardInput from './standard-input';
import { Field } from './standard-input';
//  styles
import 'react-quill/dist/quill.snow.css';

type Props = {
  fields: {
    company: Field;
    dates: {
      applied: Field;
      deadline: Field;
      followup: Field;
      found: Field;
    };
    position: {
      contact: Field;
      description: Field;
      keywords: Field;
      status: Field;
      notes: Field;
      title: Field;
      uri: Field;
    };
  };
  handler: Function;
};

const JobCard = (props: Props) => {
  const { fields, handler } = props;

  return (
    <>
      <Tabs size="md" variant="line">
        <TabList>
          <Tab>Basics</Tab>
          <Tab>Details</Tab>
          <Tab>Outcomes</Tab>
        </TabList>

        <TabPanels>
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
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default JobCard;
