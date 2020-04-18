import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Shirousagi from './shirousagi';

(async () => {
  const isHome = ['', '#/'].includes(window.location.hash);
  if (isHome) await Shirousagi.intro();

  // Start React
  const root = document.getElementById('root');
  ReactDOM.render(<App />, root);
  registerServiceWorker();

  if (isHome) Shirousagi.outro();
})();
