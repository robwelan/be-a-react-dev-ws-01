import React, { useEffect, useState } from 'react';
//  chakra-ui
import { Grid, GridItem } from '@chakra-ui/react';
//  react-easy-infinite-scroll-hook
import useInfiniteScroll, {
  ScrollDirection,
  ScrollDirectionBooleanState,
} from 'react-easy-infinite-scroll-hook';
//  components
import LoadingScreen from '../../../../../components/loading-screen';
//  local components
import ViewEmoji from '../../emoji';
import Wrapper from './wrapper';
//  recoil types
import { TypeArrayOfEmojis } from '../../../state/types';
//  local utilities
import createItems from './utilities/create-items';
import createNext from './utilities/create-next';
import defaultState from './utilities/default-state';
//  styles
import { container } from './infinite-scroll.module.css';

/*
https://github.com/vdmrgv/react-easy-infinite-scroll-hook/blob/main/example/src/pages/common/VerticalList.tsx
*/
type InfintiteScrollProps = {
  emojis: TypeArrayOfEmojis;
  filtered: boolean;
  isMobile?: boolean;
  length: {
    all: number;
    display: number;
  };
  offset?: number;
};

const InfiniteScroll = (props: InfintiteScrollProps) => {
  const offset = 50;
  const { emojis, isMobile = false } = props;
  const [state, setState] = useState(defaultState);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState<ScrollDirectionBooleanState>({
    up: false,
    down: true,
  });
  const templateColumns = isMobile ? 1 : 3;

  const gridRef = useInfiniteScroll<HTMLDivElement>({
    next: createNext({
      setData: setState,
      setIsLoading,
      emojis,
      length: state.data.emojis.length,
      offset,
    }),
    rowCount: emojis.length,
    hasMore,
  });

  //  mounting
  useEffect(() => {
    const doLoadData = async () => {
      const loadData = await createItems({
        emojis,
        offset,
      });

      setState(loadData);
    };

    doLoadData();
  }, [emojis]);

  //  loading
  useEffect(() => {
    if (!state.data.processed) {
      setIsLoading(true);
    }

    if (state.data.processed) {
      setIsLoading(false);
    }
  }, [state.data.processed]);

  return (
    <Grid
      className={container}
      gap={4}
      templateColumns={`repeat(${templateColumns}, 1fr)`}
      ref={gridRef}
    >
      {state.data.emojis.map((item) => (
        <GridItem key={item.id}>
          <ViewEmoji emoji={item} />
        </GridItem>
      ))}
      {isLoading && <LoadingScreen />}
    </Grid>
  );
};

export default InfiniteScroll;
