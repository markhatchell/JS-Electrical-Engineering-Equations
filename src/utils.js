/**
 *
 * Takes a number and sets it to a given decimal precision.
 *
 * @param {number} num
 * @param {number} precision
 * @return {number}
 */
function getFloat(num = 0, precision = 2) {
  return parseFloat(num.toFixed(precision));
}

/**
 * Takes meters and converts them to centimeters with a given precision.
 * @param {number} meters
 * @param {number} precision
 * @return {number}
 */
function metersToCentimeters(meters, precision = 4) {
  return getFloat((meters * 100), precision);
}

/**
 * Takes meters and converts them to feet with a given precision.
 * @param {number} meters
 * @param {number} precision
 * @return {number}
 */
function metersToFeet(meters, precision = 4) {
  return getFloat(meters * 3.2808399, precision);
}

/**
 * Takes meters and converts them to inches with a given precision.
 * @param {number} meters
 * @param {number} precision
 * @return {number}
 */
function metersToInches(meters, precision = 4) {
  return getFloat((meters * 3.2808399) * 12, precision);
}

/**
 * Takes a unit of length, a length in meters and converts meters to the given unit of length with the specified precision.
 * @param unit
 * @param value
 * @param precision
 * @return {number}
 */
function meterConversion(unit, value, precision) {
  switch(unit) {
    case 'cm':
      return metersToCentimeters(value, precision);
    case 'm':
      return getFloat(value, precision);
    case 'f':
      return metersToFeet(value, precision);
    case 'in':
      return metersToInches(value, precision);
  }
}

export {
  getFloat, metersToCentimeters, metersToFeet, metersToInches, meterConversion
};