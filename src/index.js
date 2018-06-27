import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Shirousagi from './shirousagi';

(async () => {
  await Shirousagi.intro();

  // Start React
  const root = document.getElementById('root');
  root.style.display = 'block';
  ReactDOM.render(<App />, root);
  registerServiceWorker();

  Shirousagi.outro();
})();
