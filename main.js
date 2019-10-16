// Variables
const btn = document.querySelector(".info");
const bar = document.querySelector(".frame .progress");
const release = document.querySelector(".release");
const ball = document.querySelector(".ball");
const frame = document.querySelector(".frame");

// Functions:
// Reset function
const reset = () => {};

// Stretching spring
const stretchSpring = () => {
  btn.innerText = "release the spring";
  bar.style.width = "50%";
};

// Releasing spring
const releaseSpring = () => {
  btn.innerText = "impact power is...";
};

// Events
btn.addEventListener("mousedown", stretchSpring);
btn.addEventListener("mouseup", releaseSpring);
