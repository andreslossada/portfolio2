export function darkenColor(color, ratio) {
  color = color.substring(1); // remove #
  const num = parseInt(color, 16); // convert to integer
  const r = (num >> 16) - Math.ceil((255 - (num >> 16)) * ratio); // extract red, process
  const b =
    ((num >> 8) & 0x00ff) - Math.ceil((255 - ((num >> 8) & 0x00ff)) * ratio); // extract blue, process
  const g = (num & 0x0000ff) - Math.ceil((255 - (num & 0x0000ff)) * ratio); // extract green, process
  const newColor = g | (b << 8) | (r << 16); // combine back to integer
  return "#" + newColor.toString(16); // convert to hex
}
