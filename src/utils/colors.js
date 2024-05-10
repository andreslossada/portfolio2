var word = "andres";
var colorObj = {};

function rgbToHex(rgb) {
  var a = rgb.split("(")[1].split(")")[0];
  a = a.split(",");
  var b = a.map(function (x) {
    x = parseInt(x).toString(16);
    return x.length == 1 ? "0" + x : x;
  });
  return "#" + b.join("");
}

for (var i = 0; i < word.length; i++) {
  var letter = word[i];
  var element = document.querySelector(".letter-" + letter);
  var style = window.getComputedStyle(element, null);
  var color = style.getPropertyValue("background-color");
  color = rgbToHex(color);
  colorObj["letter-" + letter] = color;
}
export default colorObj;
