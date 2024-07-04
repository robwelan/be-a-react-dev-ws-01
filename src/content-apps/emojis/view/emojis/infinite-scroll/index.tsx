import React, { useEffect, useState } from 'react';
//  recoil
import { useRecoilValue } from 'recoil';
//  chakra-ui
import { Grid } from '@chakra-ui/react';
//  components
import LoadingScreen from '../../../../../components/loading-screen';
//  hooks
import useContainerBoundaryReached, {
  ContainerBoundaryReachedPayload,
} from '../../../../../hooks/use-container-edge-reached';
//  local components
import ViewEmoji from '../../emoji';
//  local hooks
import useEventListener from '../../../../../hooks/use-event-listener';
//  local utilities
import createItems from './utilities/create-items';
import createNext from './utilities/create-next';
//  default state
import defaultState from './utilities/default-state';
//  recoil types
import { TypeArrayOfEmojis } from '../../../state/types';

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
  const { emojis, isMobile = false, offset = 50 } = props;
  const [rows, setRows] = useState({ first: 0, last: offset, offset });
  const [state, setState] = useState(defaultState);
  const [loading, setLoading] = useState(false);

  const templateColumns = isMobile ? 1 : 3;

  const handleScroll = async (payload) => {
    const { bottom, top } = payload;

    const result = await createNext({
      edge: { bottom, top },
      offset,
      rows,
    });
  };

  //  loading effect
  useEffect(() => {
    const items = createItems({ emojis, rows });

    setState(items);
  }, []);

  useContainerBoundaryReached({
    callback: handleScroll,
    type: 'window',
  });

  // const ref = useInfiniteScroll<HTMLDivElement>({
  //   next,
  //   rowCount: data.length,
  //   hasMore: { down: true },
  //   windowScroll: true,
  // });

  if (state && state.data && !state.data.processed) {
    return <LoadingScreen />;
  }

  return (
    <Grid gap={4} templateColumns={`repeat(${templateColumns}, 1fr)`}>
      {state &&
        state.data &&
        state.data.emojis &&
        state.data.emojis.map((emoji) => {
          const { id } = emoji;

          return (
            <Grid key={id}>
              <ViewEmoji emoji={emoji} />
            </Grid>
          );
        })}
    </Grid>
  );
};

export default InfiniteScroll;
