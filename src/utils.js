const getFloat = (num = 0, precision = 2) => {
  return parseFloat(num.toFixed(precision));
};


function metersToCentimeters(meters, precision = 4) {
  precision = 4;
  return getFloat((meters * 100), precision);
}

function metersToFeet(meters, precision = 4) {
  precision = 4;
  return getFloat(meters * 3.2808399, precision);
}

function metersToInches(meters, precision = 4) {
  precision = 4;
  return getFloat((meters * 3.2808399) * 12, precision);
}


export {
  getFloat, metersToCentimeters, metersToFeet, metersToInches
};