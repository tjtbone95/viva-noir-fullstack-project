// Overlay.jsx
import React from 'react';
import './Overlay.scss';

const Overlay = ({ active, onClick }) => {
  return <div className={`overlay ${active ? 'active' : ''}`} onClick={onClick}></div>;
};

export default Overlay;