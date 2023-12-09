import React from 'react';
//  chakra-ui
import { Table, Tbody, TableContainer } from '@chakra-ui/react';
//  recoil
import { useRecoilValue } from 'recoil';
//  local components
import TableCaption from './caption';
import TableFooter from './footer';
import TableHeader from './header';
import TableRow from './row';
//  state
import { htmlEntitiesState } from '../state/atoms';

const Content = () => {
  const entities = useRecoilValue(htmlEntitiesState);

  return (
    <TableContainer>
      <Table size="sm" variant="striped" colorScheme="gray">
        <TableCaption />
        <TableHeader />
        <Tbody>
          {entities &&
            entities.length > 0 &&
            entities.map((entity, index) => (
              <TableRow key={index} entity={entity} />
            ))}
        </Tbody>
        <TableFooter />
      </Table>
    </TableContainer>
  );
};

export default Content;
