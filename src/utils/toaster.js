import Toastify from "toastify-js";

export function showToast() {
  Toastify({
    text: "Email copied",
    duration: 2000,
    close: false,
    gravity: "bottom",
    position: "right",
    onClick: navigator.clipboard.writeText("andres.lu22@gmail.com"),
    style: {
      background: "white",
      color: "black",
      borderRadius: "8px",
    },
  }).showToast();
}
