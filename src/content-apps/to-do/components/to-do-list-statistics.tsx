import React from 'react';
//  chakra-ui
import {
  Center,
  Heading,
  SimpleGrid,
  Tag,
  TagLeftIcon,
  TagLabel,
  useColorModeValue,
} from '@chakra-ui/react';
//  react-icons
import { BiTask } from '@react-icons/all-files/bi/BiTask';
import { BsListTask } from '@react-icons/all-files/bs/BsListTask';
import { BiTaskX } from '@react-icons/all-files/bi/BiTaskX';
import { TbFilePercent } from 'react-icons/tb';
//  recoil
import { useRecoilValue } from 'recoil';
//  local components
import BasicContainer from './basic-container';
//  state
import { todoListStatsState } from '../state';

const TodoListStatistics = () => {
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted,
  } = useRecoilValue(todoListStatsState);
  const colorAll = useColorModeValue('black.900', 'black.100');
  const colorComplete = useColorModeValue('green.500', 'green.200');
  const colorIncomplete = useColorModeValue('red.500', 'red.200');

  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  return (
    <>
      <BasicContainer marginTop="">
        <Heading as="h6" fontSize="105%">
          Statistics:
        </Heading>
        <SimpleGrid columns={[1, null, 4]} gap={2} marginTop="0.5em">
          <Center>
            <Tag color={colorAll} size="sm" variant="outline">
              <TagLeftIcon boxSize="12px" as={BsListTask} />
              <TagLabel>Total items: {totalNum}</TagLabel>
            </Tag>
          </Center>
          <Center>
            <Tag color={colorComplete} size="sm" variant="outline">
              <TagLeftIcon boxSize="12px" as={BiTask} />
              <TagLabel>Items complete: {totalCompletedNum}</TagLabel>
            </Tag>
          </Center>
          <Center>
            <Tag color={colorIncomplete} size="sm" variant="outline">
              <TagLeftIcon boxSize="12px" as={BiTaskX} />
              <TagLabel>Items incomplete: {totalUncompletedNum}</TagLabel>
            </Tag>
          </Center>
          <Center>
            <Tag color={colorAll} size="sm" variant="outline">
              <TagLeftIcon boxSize="12px" as={TbFilePercent} />
              <TagLabel>
                Percent complete: {formattedPercentCompleted}%
              </TagLabel>
            </Tag>
          </Center>
        </SimpleGrid>

        {/*
            <List fontSize="90%">
              <li>Text not completed: {allText}</li>
            </List>
        */}
      </BasicContainer>
    </>
  );
};

export default TodoListStatistics;
