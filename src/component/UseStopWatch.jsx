import { useState, useRef, useEffect } from 'react';

const UseStopWatch = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [timerInterval, setTimerInterval] = useState(null);
  const startTime = useRef(null);

  useEffect(() => {
    return () => {
      if (timerInterval) {
        clearInterval(timerInterval);
      }
    };
  }, [timerInterval]);

  const updateTimeDisplay = () => {
    setElapsedTime((Date.now() - startTime.current) / 1000);
  };

  const start = () => {
    startTime.current = Date.now() - elapsedTime * 1000;
    setTimerInterval(setInterval(updateTimeDisplay, 1000));
  };

  const stop = () => {
    clearInterval(timerInterval);
    setTimerInterval(null);
  };

  const reset = () => {
    setElapsedTime(0);
  };

  return { elapsedTime, start, stop, reset, isRunning: timerInterval !== null };
};

export default UseStopWatch;
