export function stripRed(rgb) {
  rgb[0] = 0;
  return rgb;
}

export function stripGreen(rgb) {
  const [r, _, b] = rgb;
  return [r, 0, b];
}

export function stripBlue(rgb) {
  const [r, g, _] = rgb;
  return [r, g, 0];
}

export function invert(rgb) {
  return rgb.map((value) => 255 - value);
}

export function grayScale(rgb) {
  const average = rgb.reduce((acc, curr) => acc + curr, 0) / rgb.length;
  return new Array(3).fill(average);
}

// TODO: Could make getting the average of an array a earlier challenge?

export function blackAndWhite(rgb) {
  const average = rgb.reduce((acc, curr) => acc + curr, 0) / rgb.length;

  if (average < 255 / 2) {
    return new Array(3).fill(0);
  }

  return new Array(3).fill(255);
}

export function colorChannel(rgb, color) {
  const [r, g, b] = rgb;

  switch (color) {
    case "r":
      return [r, 0, 0];
    case "g":
      return [0, g, 0];
    case "b":
      return [0, 0, b];

    default:
      return rgb;
  }
}

export function sepia(rgb) {
  const [r, g, b] = rgb;
  const sepiaRed = Math.min(r * 0.393 + g * 0.769 + b * 0.189, 255);
  const sepiaGreen = Math.min(r * 0.349 + g * 0.686 + b * 0.168, 255);
  const sepiaBlue = Math.min(r * 0.272 + g * 0.534 + b * 0.131, 255);
  return [sepiaRed, sepiaGreen, sepiaBlue];
}

export function adjustBrightness(rgb, brightness) {
  return rgb.map((color) =>
    Math.max(0, Math.min(color + parseInt(brightness), 255))
  );
}

export function rotate(rgb) {
  return rgb.reverse()
}
