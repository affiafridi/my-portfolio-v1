// src/components/LoadingBar.js

import React, { useState, useEffect } from 'react';
import './Loadingbar.css';

const LoadingBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 1);
      }
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [progress]);

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default LoadingBar;
