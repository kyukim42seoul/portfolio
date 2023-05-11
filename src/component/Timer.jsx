import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TimeDisplay from './TimeDisplay';
import InputField from './InputField';
import UseTimer from './UseTimer';
import styles from './Timer.module.css';

const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const initialTime = hours * 3600 + minutes * 60 + seconds;
  const timer = UseTimer(initialTime);

  return (
    <div>
      <h1>Timer</h1>
      <div>
        <InputField
          value={hours}
          onChange={(e) => setHours(Math.max(0, parseInt(e.target.value) || 0))}
          placeholder="Hours"
        />
        <InputField
          value={minutes}
          onChange={(e) => setMinutes(Math.max(0, parseInt(e.target.value) || 0))}
          placeholder="Minutes"
        />
        <InputField
          value={seconds}
          onChange={(e) => setSeconds(Math.max(0, parseInt(e.target.value) || 0))}
          placeholder="Seconds"
        />
      </div>
      <TimeDisplay seconds={timer.remainingTime} />
      <button className={styles.cute_button} onClick={timer.start} disabled={timer.isRunning}>
        Start
      </button>
      <button className={styles.cute_button} onClick={timer.stop} disabled={!timer.isRunning}>
        Stop
      </button>
      <button className={styles.cute_button} onClick={timer.reset}>Reset</button>
      <br />
      <Link to="/home">Go Home</Link>
    </div>
  );
};

export default Timer;
