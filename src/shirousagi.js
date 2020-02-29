// Util functions
// ================================
const randInt = (min, max) => min + Math.floor(Math.random() * (max - min));
const choice = str => str.charAt(randInt(0, str.length));

let width = 0;
let height = 0;
let ctx = null;

function animate(innerFunction, baseCase, fps) {
  let loop;
  if (fps && fps < 60) {
    const fpsInterval = 1000 / fps;
    let then = Date.now();
    let done = false;

    loop = (callback) => {
      if (done) {
        callback();
        return;
      }

      requestAnimationFrame(() => loop(callback));
      // Enforce FPS
      const now = Date.now();
      const elapsed = now - then;
      if (elapsed <= fpsInterval) return;
      then = now - (elapsed % fpsInterval);

      if (baseCase()) {
        done = true;
      } else {
        innerFunction();
      }
    };
  } else {
    loop = (callback) => {
      if (baseCase()) {
        callback();
        return;
      }
      requestAnimationFrame(() => loop(callback));
      innerFunction();
    };
  }
  return new Promise(resolve => loop(resolve));
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Main functions
// ================================
function setup() {
  const canvas = document.getElementById('introCanvas');

  // Thank you https://gist.github.com/Linrstudio/7236158c6c8d8103b9fb
  width = document.documentElement.clientWidth;
  height = document.documentElement.clientHeight;
  ctx = canvas.getContext('2d');

  // Modify canvas to be high DPI
  // Lovingly adapted from http://stackoverflow.com/a/15666143/1313757
  const dpr = window.devicePixelRatio || 1;
  const bsr = ctx.webkitBackingStorePixelRatio
    || ctx.mozBackingStorePixelRatio
    || ctx.msBackingStorePixelRatio
    || ctx.oBackingStorePixelRatio
    || ctx.backingStorePixelRatio
    || 1;
  const ratio = dpr / bsr;

  canvas.width = width * ratio;
  canvas.height = height * ratio;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

  canvas.style.display = 'block';
}

async function rain(message) {
  // Misc constants
  // ================================
  const alpha = '0123456789ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝ';
  const upper = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  // Colors
  const normal = '#5CFF5C';
  const brightA = '#8F8';
  const brightB = '#AFA';

  // Display Constants
  // ================================
  const fsize = 14;
  ctx.font = `${fsize}pt monospace`;
  const defaultBackground = 'rgba(0, 0, 0, 0.05)';
  // Spacing between glyphs
  const hspace = 1.1;
  const vspace = 1.2;
  // Glyph dimensions
  const glyphW = fsize * hspace;
  const glyphH = fsize * vspace;

  // Initialization Variables
  // ================================
  let numDrops = Math.floor(width / glyphW);
  // Both 'numDrops' and 'message.length' must be either even or odd to easily center
  if ((numDrops + message.length) % 2) {
    numDrops--;
  }

  // Unused (horizontal) canvas space
  const unused = width - numDrops * glyphW + fsize * (hspace - 1);
  const padding = unused / 2; // Used to center all columns horizontally

  const hmiddle = Math.floor(numDrops / 2); // Horizontal middle of the screen (in glyphs)
  const halfText = Math.floor(message.length / 2);
  const textLeft = hmiddle - halfText; // Raindrop column index to start message
  const textRight = textLeft + message.length; // Raindrop column index to end message
  // Vertical location on screen for text (50% of screen height)
  const textTop = Math.floor(height / glyphH / 2) * glyphH;

  // Raindrop Initialization
  // ================================
  let drops = [];
  let numPerma = 0;
  for (let i = 0; i < numDrops; i++) {
    // Start randomly above screen
    let y = -1 * randInt(0, height / glyphH) * glyphH;
    y += 0.1337; // Ensure no permanent letters align the first time

    // Is this a column to display message in? (should become permanent)
    const perma = (
      i >= textLeft && i < textRight // Bounds
      && message.charAt(i - textLeft) !== ' ' // Spaces are not permanent letters
    );

    if (perma) numPerma++;

    drops.push({ y, perma, done: false });
  }
  let numFinished = 0;
  let shouldStop = false;

  // Canvas Drawing Functions
  // ================================
  function addShadow() {
    ctx.shadowColor = 'white';
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = fsize * 2;
  }

  function resetShadow() {
    ctx.shadowColor = '';
    ctx.shadowBlur = 0;
  }

  function drawBackground(fillStyle = defaultBackground) {
    ctx.fillStyle = fillStyle;
    ctx.fillRect(0, 0, width, height);
  }

  // Animation Functions
  // ================================
  function fall() {
    drawBackground();

    drops = drops.map((drop, i) => {
      let { y, done } = drop;
      const { perma } = drop;

      // Letter in message reached its final position
      if (perma && Math.abs(y - textTop) < 0.0001) {
        const char = message.charAt(i - textLeft);
        const x = padding + i * glyphW;

        if (!done) {
          done = true;
          numFinished++;

          // Signal to stop the raining if half of the text has formed
          if (numFinished > message.length / 2) {
            shouldStop = true;
          }

          addShadow();
          ctx.fillStyle = 'white';
          ctx.fillText(char, x, y);
          resetShadow();
        } else {
          ctx.fillStyle = brightA;
          ctx.fillText(char, x, y);
        }
      } else if (!done) {
        const char = choice(alpha);
        const x = padding + i * glyphW;

        // 3% brighter color
        ctx.fillStyle = (Math.random() > 0.97) ? brightB : normal;
        ctx.fillText(char, x, y);

        const shouldReset = y > randInt(height, height * 1.667);

        if (shouldReset) {
          if (shouldStop && !perma) {
            done = true;
            numFinished++;
          } else {
            y = 0;
          }
        } else {
          y += glyphH;
        }
      }

      return { y, perma, done };
    });
  }

  function fadeBackground() {
    drawBackground('rgba(0, 0, 0, 0.1)');
    ctx.fillStyle = normal;

    drops.forEach(({ y, perma }, i) => {
      if (perma) {
        const char = message.charAt(i - textLeft);
        const x = padding + i * glyphW;
        ctx.fillText(char, x, y);
      }
    });
  }

  let numDisappeared = 0;
  let tries = 0;
  function disappear(maxTries) {
    tries++;
    drawBackground('black');
    ctx.fillStyle = normal;

    drops = drops.map((drop, i) => {
      let { done, char } = drop;
      const { y, perma } = drop;
      if (perma && !done) {
        if (char === undefined) {
          char = message.charAt(i - textLeft);
        }
        if (Math.random() > 0.97) {
          char = choice(upper);
        }
        const x = padding + i * glyphW;
        ctx.fillText(char, x, y);

        // Kill if it's taking too long
        if (Math.random() > 0.90 || tries > maxTries) {
          done = true;
          numDisappeared++;
        }
      }

      return {
        y, perma, done, char,
      };
    });
  }

  const fps = height / 20;
  await animate(fall, () => numFinished === numDrops, fps);

  let i = 0;
  await animate(fadeBackground, () => i++ === 35, fps);

  // Reuse `done` variable
  drops = drops.map(({ y, perma }) => ({ y, perma, done: false }));
  const disappearFps = 18;
  const maxSeconds = 1;
  const maxTries = maxSeconds * disappearFps;
  await animate(() => disappear(maxTries), () => numDisappeared === numPerma, disappearFps);

  drawBackground('black');
}

async function intro() {
  setup();
  const message = 'WELCOME, VISITOR';
  await rain(message);
}

async function outro() {
  const canvas = document.getElementById('introCanvas');

  const fadeTime = 1000; // ms
  canvas.style.transition = `opacity ${fadeTime}ms ease-in-out`;
  canvas.style.opacity = 0;

  // Give the CSS transition some extra time to finish just in case
  await sleep(fadeTime + 200);
  canvas.parentNode.removeChild(canvas);
}

export default { intro, outro };
