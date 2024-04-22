import React from 'react';
//  chakra-ui
import { Table, Tbody, TableContainer } from '@chakra-ui/react';
//  recoil
import { useRecoilValue } from 'recoil';
//  local components
import InputFilter from './input-filter';
import TableCaption from './caption';
import TableFooter from './footer';
import TableHeader from './header';
import TableRow from './row';
//  state
import { htmlEntitiesState, htmlEntitiesFilterState } from '../state/atoms';

const Content = () => {
  const state = useRecoilValue(htmlEntitiesState);
  const filter = useRecoilValue(htmlEntitiesFilterState);

  return (
    <>
      <InputFilter />
      <TableContainer>
        <Table size="sm" variant="striped" colorScheme="gray">
          <TableCaption />
          <TableHeader />
          <Tbody>
            {filter !== '' &&
              state.entities &&
              state.entities.length > 0 &&
              state.entities
                .filter((entity) => {
                  const { character } = entity;

                  if (character.toLowerCase().includes(filter.toLowerCase())) {
                    return entity;
                  }

                  return null;
                })
                .map((entity, index) => (
                  <TableRow key={index} entity={entity} />
                ))}
            {filter === '' &&
              state.entities &&
              state.entities.length > 0 &&
              state.entities.map((entity, index) => (
                <TableRow key={index} entity={entity} />
              ))}
          </Tbody>
          <TableFooter />
        </Table>
      </TableContainer>
    </>
  );
};

export default Content;
