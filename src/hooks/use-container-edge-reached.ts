import { useEffect, useState } from 'react';
import useEventListener from './use-event-listener';
//  utilities
import getWindow from '../utilities/window/get-window';

type UseContainerBoundaryReachedPayload = {
  callback?: Function;
  type: string;
};

const SCROLL_DIRECTION_DOWN = 'down';
const SCROLL_DIRECTION_LEFT = 'left';
const SCROLL_DIRECTION_RIGHT = 'right';
const SCROLL_DIRECTION_UP = 'up';

const defaultState = {
  bottom: false,
  direction: '',
  left: false,
  right: false,
  top: false,
};

export const ContainerBoundaryReachedPayload = defaultState;

const useContainerBoundaryReached = (
  payload: UseContainerBoundaryReachedPayload,
) => {
  const { callback = () => {}, ref, type } = payload;
  const [state, setState] = useState({ ...defaultState });
  let direction = 'down';
  let scrollPos = 0;

  const handleScroll = () => {
    if (type === 'window') {
      const globalWindow = getWindow();
      // detects new state and compares it with the new one
      if (globalWindow.document.body.getBoundingClientRect().top > scrollPos) {
        direction = SCROLL_DIRECTION_UP;
      } else {
        direction = SCROLL_DIRECTION_DOWN;
      }
      // saves the new position for iteration.
      scrollPos = globalWindow.document.body.getBoundingClientRect().top;

      if (globalWindow) {
        const bottom =
          Math.ceil(globalWindow.innerHeight + globalWindow.scrollY) >=
          globalWindow.document.documentElement.scrollHeight;

        const top = globalWindow.pageYOffset === 0;

        if (direction === SCROLL_DIRECTION_DOWN) {
          setState({
            ...defaultState,
            direction,
            bottom,
          });
        }

        if (direction === SCROLL_DIRECTION_UP) {
          setState({
            ...defaultState,
            direction,
            top,
          });
        }
      }
    }
  };

  useEventListener({ type: 'scroll', callback: handleScroll });

  useEffect(() => {
    if (state.bottom || state.left || state.right || state.top) {
      if (typeof callback === 'function') {
        callback(state);
      }
      setState({ ...defaultState });
    }
  }, [state.bottom, state.left, state.right, state.top]);
};

export default useContainerBoundaryReached;
