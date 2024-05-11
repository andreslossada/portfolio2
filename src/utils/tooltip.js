import tippy, { createSingleton } from "tippy.js";

const linkedin = document.getElementById("linkedin");
const email = document.getElementById("email");
const github = document.getElementById("github");

const tippy1 = tippy(linkedin, {
  content: "Open my LinkedIn",
});

const tippy2 = tippy(email, {
  content: "Copy Email",
});

const tippy3 = tippy(github, {
  content: "Open my Github",
});

createSingleton([tippy1, tippy2, tippy3], {
  offset: [0, 20],
  delay: 300,
  placement: "bottom",
  theme: "tomato",
  moveTransition: "transform .4s ease-out",
});
