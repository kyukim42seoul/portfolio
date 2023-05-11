import React from 'react';
import { Link } from 'react-router-dom';
import TimeDisplay from './TimeDisplay';
import UseStopWatch from './UseStopWatch';

const StopWatch = () => {
  const { elapsedTime, start, stop, reset, isRunning } = UseStopWatch();

  return (
    <div>
      <h1>StopWatch</h1>
      <TimeDisplay seconds={elapsedTime} />
      <button onClick={start} disabled={isRunning}>Start</button>
      <button onClick={stop} disabled={!isRunning}>Stop</button>
      <button onClick={reset}>Reset</button>
      <br />
      <Link to='/home'>Go Home</Link>
    </div>
  );
};

export default StopWatch;
