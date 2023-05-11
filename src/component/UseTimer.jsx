import { useState, useRef, useEffect } from 'react';

const UseTimer = (initialTime) => {
  const [remainingTime, setRemainingTime] = useState(initialTime);
  const [timerInterval, setTimerInterval] = useState(null);

  useEffect(() => {
    setRemainingTime(initialTime);
  }, [initialTime]);

  useEffect(() => {
    return () => {
      if (timerInterval) {
        clearInterval(timerInterval);
      }
    };
  }, [timerInterval]);

  const updateRemainingTime = () => {
    setRemainingTime((prevRemainingTime) => {
      if (prevRemainingTime > 0) {
        return prevRemainingTime - 1;
      } else {
        clearInterval(timerInterval);
        setTimerInterval(null);
        return 0;
      }
    });
  };

  const start = () => {
    setTimerInterval(setInterval(updateRemainingTime, 1000));
  };

  const stop = () => {
    clearInterval(timerInterval);
    setTimerInterval(null);
  };

  const reset = () => {
    clearInterval(timerInterval);
    setTimerInterval(null);
    setRemainingTime(initialTime);
  };

  return { remainingTime, start, stop, reset, isRunning: timerInterval !== null };
};

export default UseTimer;
