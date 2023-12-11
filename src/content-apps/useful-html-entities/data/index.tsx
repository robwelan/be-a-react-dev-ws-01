import React, { useEffect } from 'react';
//  recoil
import { useRecoilState } from 'recoil';
//  constants
import {
  DATA_SET_SORT_STEP_SORT,
  DATA_SET_SORT_STEP_ENTITIES,
  DATA_SET_SORT_STEP_FOOTNOTE_VALUES,
  DATA_SET_SORT_STEP_COMPLETE,
} from '../constants/sorting';
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
      setSort((prevState) => ({ ...prevState, step: DATA_SET_SORT_STEP_SORT }));
    }
  }, [entitiesState.sorted]);

  //  do work effect
  useEffect(() => {
    if (sortState.step !== DATA_SET_SORT_STEP_COMPLETE) {
      if (!sortState.sorted) {
        if (sortState.step === DATA_SET_SORT_STEP_ENTITIES) {
          sortEntitiesTableColumn({
            entities: entitiesState.entities,
            setEntities,
            sort: sortState,
          });
        }

        if (sortState.step === DATA_SET_SORT_STEP_SORT) {
          buildSortState({
            entities: entitiesState.entities,
            order: orderState,
            setOrder,
          });
        }

        if (sortState.step === DATA_SET_SORT_STEP_FOOTNOTE_VALUES) {
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
    }
  }, [sortState.sorted, sortState.step]);

  //  footnotes effect
  useEffect(() => {
    if (footnotesState.sorted) {
      setSort((prevState) => ({
        ...prevState,
        sorted: true,
        step: DATA_SET_SORT_STEP_COMPLETE,
      }));
    }
  }, [footnotesState.sorted]);

  //  sort effect
  useEffect(() => {
    if (orderState.sorted) {
      setSort((prevState) => ({
        ...prevState,
        step: DATA_SET_SORT_STEP_FOOTNOTE_VALUES,
      }));
    }
  }, [orderState.sorted]);

  return (
    <>
      <View />
    </>
  );
};

export default Data;
