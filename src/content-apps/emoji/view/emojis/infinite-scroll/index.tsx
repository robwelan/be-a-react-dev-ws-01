import React, { useEffect, useRef, useState } from 'react';
import useInfiniteScroll, {
  ScrollDirection,
} from 'react-easy-infinite-scroll-hook';
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

type InfintiteScrollProps = {
  isMobile?: boolean;
  offset?: number;
};

const InfiniteScroll = (props: InfintiteScrollProps) => {
  const { isMobile = false, offset = 50 } = props;
  const [rows, setRows] = useState({ first: 0, last: offset });
  const [data, setData] = useState(
    createItems({ api: { data: emojis }, rows }),
  );
  const [loading, setLoading] = useState(false);

  const handleScroll = async (payload) => {
    const { bottom, top } = payload;

    const result = await createNext({
      api: { data: emojis },
      edge: { bottom, top },
      offset,
      rows,
    });
  };

  useContainerBoundaryReached({
    callback: handleScroll,
    type: 'window',
  });
  const templateColumns = isMobile ? 1 : 3;

  // const ref = useInfiniteScroll<HTMLDivElement>({
  //   next,
  //   rowCount: data.length,
  //   hasMore: { down: true },
  //   windowScroll: true,
  // });

  return (
    <Grid gap={4} templateColumns={`repeat(${templateColumns}, 1fr)`}>
      {data.map((emoji) => {
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
