import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const App = () => {
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const snackbarRef = useRef(null);

  const showSnackbar = (message) => {
    setSnackbarMessage(message);
    const snackbar = snackbarRef.current;
    snackbar.className = 'snackbar show';
    setTimeout(() => {
      if (snackbar.className.includes('show')) {
        snackbar.className = 'snackbar';
      }
    }, 6000); 
  };

  const closeSnackbar = () => {
    const snackbar = snackbarRef.current;
    snackbar.className = 'snackbar';
  };

  useEffect(() => {
    showSnackbar('Revisa tu URL'); 
  }, []);

  return (
    <div className="App">
      <div className="arrow-container">
        <div className="arrow" />
      </div>
      <div ref={snackbarRef} className="snackbar">
        <div className="message">{snackbarMessage}</div>
        <button className="action-btn" onClick={closeSnackbar}>Close</button>
      </div>
    </div>
  );
};

export default App;