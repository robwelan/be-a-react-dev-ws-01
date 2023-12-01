import { useEffect, useState } from 'react';
import { format } from 'date-fns';
/**
 * Function to display a digital clock.
 */
const useGetTime = () => {
  const [state, setState] = useState(format(new Date(), 'hh:mm:ss a'));
  /**
   * Function to format the current time as a string in HH:MM:SS format.
   *
   * @returns {string} The formatted time string.
   */
  const formatTime = () => {
    const now = new Date();

    setState(format(now, 'hh:mm:ss a'));
  };

  /**
   * Function to update the clock display every second.
   */
  const updateClock = () => {
    formatTime();
  };

  useEffect(() => {
    // Update the clock immediately
    updateClock();
    // Update the clock every second
    const id = setInterval(updateClock, 100);

    return () => {
      clearInterval(id);
    };
  }, []);

  return [state];
};

export default useGetTime;
