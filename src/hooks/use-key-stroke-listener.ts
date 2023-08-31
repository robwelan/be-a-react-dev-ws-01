import { useEffect, useState } from 'react';
//  local hooks
import useEventListener from './use-event-listener';

const TYPE_KEYSTROKE_DOWN = 'keydown';
const TYPE_KEYSTROKE_UP = 'keyup';
const TIMEOUT_TYPING_INTERVAL = 500; // 0.5 seconds

type Payload = {
  callback?: Function;
};

const useKeyStrokeListener = (payload: Payload) => {
  const { callback = () => {} } = payload;
  const [mounted, setMounted] = useState(false);
  let timerKeyDown: number; // timer key up identifier
  let timerKeyUp: number; // timer key up identifier

  const handleOnKeyDown = (e: Object) => {
    if (mounted) {
      clearTimeout(timerKeyDown);
      timerKeyDown = window.setTimeout(callback, TIMEOUT_TYPING_INTERVAL);
    }
  };

  const handleOnKeyUp = (e: Object) => {
    if (mounted) {
      clearTimeout(timerKeyUp);
      timerKeyUp = window.setTimeout(callback, TIMEOUT_TYPING_INTERVAL);
    }
  };

  useEventListener({ type: TYPE_KEYSTROKE_DOWN, callback: handleOnKeyDown });
  useEventListener({ type: TYPE_KEYSTROKE_UP, callback: handleOnKeyUp });

  //  mounted effect
  useEffect(() => {
    setMounted(true);

    return () => {
      clearTimeout(timerKeyDown);
      clearTimeout(timerKeyUp);

      setMounted(false);
    };
  }, []);
};

export default useKeyStrokeListener;
