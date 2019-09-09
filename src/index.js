import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Shirousagi from './shirousagi';

const imageReferences = {};

const preloadImages = () => {
  const importAll = r => r.keys().map(r);
  const images = importAll(require.context('./images', false, /^\.\//));

  images.forEach((file) => {
    const image = new Image();
    image.src = file;
    imageReferences[file] = image;
  });
};

(async () => {
  const isHome = (
    window.location.hash === '' ||
    window.location.hash === '#/');

  if (isHome) {
    preloadImages();
    await Shirousagi.intro();
  }

  // Start React
  const root = document.getElementById('root');
  ReactDOM.render(<App />, root);
  registerServiceWorker();

  if (isHome) {
    Shirousagi.outro();
  }
})();
