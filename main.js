// Variables
const btn = document.querySelector(".info");
const bar = document.querySelector(".frame .progress");
const release = document.querySelector(".release");
const ball = document.querySelector(".ball");
const frame = document.querySelector(".frame");
const frameWidth = frame.offsetWidth;

// Functions:
// Reset function
const reset = () => {};

// Stretching spring
const stretchSpring = () => {
  btn.innerText = "release the spring";
  bar.style.animationName = "progress";
  bar.style.animationPlayState = "running";
  release.style.animationPlayState = "running";
};

// Releasing spring
const releaseSpring = () => {
  bar.style.animationPlayState = "paused";
  const lastWidth = Math.floor((bar.offsetWidth * 100) / frameWidth);
  btn.innerText = `impact power is ${lastWidth}%`;
  release.style.animationName = "none";
  ball.style.transition = "1s ease-out";
  ball.style.left = `${lastWidth}%`;
  ball.style.marginBottom = 0;
};

// Events
btn.addEventListener("mousedown", stretchSpring);
btn.addEventListener("mouseup", releaseSpring);
