import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import shirousagi from './shirousagi';

(async () => {
  // Intro
  await shirousagi();

  // Remove canvas
  const canvas = document.getElementById('introCanvas');
  document.body.removeChild(canvas);

  // Start React
  const root = document.getElementById('root');
  root.style.display = 'block';
  ReactDOM.render(<App />, root);
  registerServiceWorker();
})();
