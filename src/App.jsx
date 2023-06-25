import React, { useState } from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import SharedContext from './SharedContext';
import Home from './page/Home';
import Dashboard from './page/Dashboard';
import StopWatch from './component/Stopwatch';
import Timer from './component/Timer';

function Main() {
  const [sharedProp, setSharedProp] = useState(['Home', 'Dashboard', 'StopWatch', 'Timer' , 'Login', 'Logout']);

  return (
    <SharedContext.Provider value={{ sharedProp, setSharedProp }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/stopwatch" element={<StopWatch />} />
          <Route path="/timer" element={<Timer />} />
        </Routes>
      </BrowserRouter>
    </SharedContext.Provider>
  );
}

export default Main;
