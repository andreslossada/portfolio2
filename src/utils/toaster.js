import Toastify from "toastify-js";
import colorObj from "./colors";
console.log(`🚀 ~ colorObj:`, colorObj);

const colors = [];

for (var key in colorObj) {
  if (colorObj.hasOwnProperty(key)) {
    colors.push(colorObj[key]);
  }
}

function getRandomColor() {
  var index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
console.log(`🚀 ~ getRandomColor:`, getRandomColor());

export function showToast() {
  Toastify({
    text: "Email copied",
    duration: 2000,
    close: false,
    gravity: "bottom",
    position: "right",
    style: {
      background: "white",
      color: "black",
      borderRadius: "8px",
      border: `4px solid ${getRandomColor()}`,
    },
  }).showToast();
}
