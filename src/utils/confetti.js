import confetti from "canvas-confetti";
import colorObj from "./colors";

var count = 200;
const angle = 125;

var defaults = {
  origin: { y: 1, x: 1 },
  // legacy colors
  // colors: ["#e5c07b", "#ef596f", "#61afef", "#2bbac5", "#d55fde", "#89ca78"],
  colors: [],
};
for (var key in colorObj) {
  if (colorObj.hasOwnProperty(key)) {
    defaults.colors.push(colorObj[key]);
  }
}
function fireOne(particleRatio, opts) {
  confetti({
    ...defaults,
    ...opts,
    particleCount: Math.floor(count * particleRatio),
  });
}

export function fireAll() {
  fireOne(0.25, {
    spread: 26,
    startVelocity: 55,
    angle: angle,
  });
  fireOne(0.2, {
    angle: angle,
    spread: 60,
  });
  fireOne(0.35, {
    angle: angle,
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
  fireOne(0.1, {
    angle: angle,
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  fireOne(0.1, {
    spread: 120,
    angle: angle,
    startVelocity: 45,
  });
}
