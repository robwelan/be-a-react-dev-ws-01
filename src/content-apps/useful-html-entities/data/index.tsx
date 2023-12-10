import React, { useEffect } from 'react';
//  recoil
import { useRecoilState, useRecoilValue } from 'recoil';
//  local components
import View from '../view';
//  state
import {
  htmlEntitiesState,
  htmlEntitiesFootnotesState,
  htmlEntitiesOrderState,
  htmlEntitiesSortState,
} from '../state/atoms';
//  helpers
import adjustFootnoteValues from '../helpers/adjust-footnote-values';
import buildSortState from '../helpers/build-sort-state';
import sortEntitiesTableColumn from '../helpers/sort-entities-table-column';

const Data: React.FC = () => {
  const [entitiesState, setEntities] = useRecoilState(htmlEntitiesState);
  const [footnotesState, setFootnotes] = useRecoilState(
    htmlEntitiesFootnotesState,
  );
  const [sortState, setSort] = useRecoilState(htmlEntitiesSortState);
  const [orderState, setOrder] = useRecoilState(htmlEntitiesOrderState);

  //  entities effect
  useEffect(() => {
    if (entitiesState.sorted) {
      setSort((prevState) => ({ ...prevState, step: 'sort' }));
    }
  }, [entitiesState.sorted]);

  //  do work effect
  useEffect(() => {
    if (!sortState.sorted) {
      if (sortState.step === 'entities') {
        sortEntitiesTableColumn({
          entities: entitiesState.entities,
          setEntities,
          sort: sortState,
        });
      }

      if (sortState.step === 'sort') {
        buildSortState({
          entities: entitiesState.entities,
          order: orderState,
          setOrder,
        });
      }

      if (sortState.step === 'footnote-values') {
        adjustFootnoteValues({
          entities: entitiesState.entities,
          footnotes: {
            state: footnotesState,
            setState: setFootnotes,
          },
          list: orderState.list,
          setEntities,
        });
      }
    }
  }, [sortState.sorted, sortState.step]);

  //  footnotes effect
  useEffect(() => {
    if (footnotesState.sorted) {
      setSort((prevState) => ({
        ...prevState,
        sorted: true,
        step: 'complete',
      }));
    }
  }, [footnotesState.sorted]);

  //  sort effect
  useEffect(() => {
    if (orderState.sorted) {
      setSort((prevState) => ({ ...prevState, step: 'footnote-values' }));
    }
  }, [orderState.sorted]);

  return (
    <>
      <View />
    </>
  );
};

export default Data;
