import Toastify from "toastify-js";
import colorObj from "./colors";

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

export function showToast(text) {
  Toastify({
    text: text,
    duration: 2000,
    close: false,
    gravity: "bottom",
    position: "right",
    style: {
      background: "white",
      color: "black",
      borderRadius: "8px",
      boxShadow: `0px 0px 15px 0px ${getRandomColor()}`,
    },
  }).showToast();
}
