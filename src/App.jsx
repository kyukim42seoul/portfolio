import React, { useState } from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import SharedContext from './SharedContext';
import Home from './page/Home';
import Dashboard from './page/Dashboard';

function Main() {
  const [sharedProp, setSharedProp] = useState(['aaa', 'bbb']);

  return (
    <SharedContext.Provider value={{ sharedProp, setSharedProp }}>
      <BrowserRouter>
        <nav>
          <Link to="/home">Home</Link> | <Link to="/dashboard">Dashboard</Link>
        </nav>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </SharedContext.Provider>
  );
}

export default Main;
