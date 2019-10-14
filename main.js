const btn = document.querySelector(".info");
const bar = document.querySelector(".frame .progress");

const stretchSpring = () => {
  btn.innerText = "release the spring";
  bar.style.width = "50%";
};
const releaseSpring = () => {
  btn.innerText = "impact power is...";
};

btn.addEventListener("mousedown", stretchSpring);
btn.addEventListener("mouseup", releaseSpring);
