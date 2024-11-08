import React, { useEffect, useState } from 'react';
//  chakra-ui
import { Grid, GridItem } from '@chakra-ui/react';
//  react-easy-infinite-scroll-hook
import useInfiniteScroll, {
  ScrollDirectionBooleanState,
} from 'react-easy-infinite-scroll-hook';
//  local components
import ViewEmoji from '../../emoji';
import ViewEmojiLoading from '../../emoji-loading';
//  recoil types
import { TypeArrayOfEmojis } from '../../../state/types';
//  local utilities
import createInitial from './utilities/create-initial';
import createNext from './utilities/create-next';
import defaultState, { TypeDefaultState } from './utilities/default-state';
//  styles
import { container } from './index.module.css';

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
  const { emojis, isMobile = false } = props;
  const [state, setState] = useState<TypeDefaultState>(defaultState);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState<ScrollDirectionBooleanState>({
    up: false,
    down: true,
  });
  const templateColumns = isMobile ? 1 : 3;
  const offset = isMobile ? 50 : 48;
  const timeout = 250;
  const lengthEmojis = emojis?.length || 0;
  const lengthStateEmojis = state?.data?.emojis?.length || 0;

  const gridRef = useInfiniteScroll<HTMLDivElement>({
    next: createNext({
      setData: setState,
      setIsLoading,
      emojis,
      length: state.data.emojis.length,
      offset,
      rowCount: emojis.length,
      timeout,
    }),
    rowCount: emojis.length,
    hasMore,
  });

  //  mount effect
  useEffect(() => {
    if (state.data.processed) {
      //  re-initialise state first
      //  fixes weird issue where id is duplicated...
      setState(defaultState);
    }

    createInitial({ emojis, offset, setData: setState, setIsLoading, timeout });
    setHasMore({ up: false, down: true });

    gridRef?.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [emojis]);

  //  hasMore effect
  useEffect(() => {
    if (lengthEmojis === lengthStateEmojis) {
      setHasMore({ up: false, down: false });
    }
  }, [lengthEmojis, lengthStateEmojis]);

  return (
    <Grid
      alignItems="stretch"
      className={container}
      gridAutoRows="auto"
      ref={gridRef}
      templateColumns={`repeat(${templateColumns}, 1fr)`}
    >
      {state.data.emojis.map((item) => (
        <GridItem key={item.id}>
          <ViewEmoji emoji={item} />
        </GridItem>
      ))}
      {isLoading &&
        Array.from({ length: templateColumns }, (_, index) => (
          <GridItem key={index}>
            <ViewEmojiLoading />
          </GridItem>
        ))}
    </Grid>
  );
};

export default InfiniteScroll;
