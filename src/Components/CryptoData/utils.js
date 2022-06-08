export const arsCotization = (value) => {
  const result = value * 200;
  return result.toFixed(4);
};

export const busdusdtCotization = (value) => {
  const result = (1 / value) * 200;
  return result.toFixed(4);
};

export const verifyColorPercent = (value) => {
  if (value.startsWith("-")) {
    return "red";
  } else {
    return "green";
  }
};
