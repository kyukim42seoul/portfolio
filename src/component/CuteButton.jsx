import React from 'react';
import './CuteButton.css';

const CuteButton = ({ children, onClick }) => {
  return (
    <button className="cute-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default CuteButton;
