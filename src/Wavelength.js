'use strict';

import { getFloat, meterConversion, metersToCentimeters, metersToFeet, metersToInches } from "./util-functions";

/**
 * Wavelength represents a wavelength for a given frequency
 *
 * @example
 * let wavelength = new Wavelength('300');
 * const quarterWavelengthInInches = wavelength.toQuarterWavelength('in');
 * const quarterWavelengthInFeet = wavelength.toQuarterWavelength('f');
 * const quarterWavelengthInMeters = wavelength.toQuarterWavelength('m');
 * const quarterWavelengthInCentimeters = wavelength.toQuarterWavelength('cm');
 *
 */
class Wavelength {

  /**
   *
   * @param {number} frequencyInMegahertz - The given frequency for the wavelength.
   * @param {number} [precision = 4] - The float precision for returned values.
   * @returns {Wavelength}
   *
   */
  constructor(frequencyInMegahertz, precision = 4) {
    if (typeof frequencyInMegahertz === 'undefined') {
      throw new Error('Need a frequency to init a Wavelength');
    }
    if (typeof frequencyInMegahertz !== 'number') {
      throw new Error('Frequency should be a number');
    }

    /**
     * @type {number}
     */
    this.frequencyInMegahertz = frequencyInMegahertz;

    /**
     * @type {number}
     */
    this.valueInMeters = 300 / this.frequencyInMegahertz;

    this.setPrecision(precision);
  }

  /**
   * @returns {string} - The full wavelength of the given frequency as a string.
   */
  toString() {
    return getFloat(this.valueInMeters, this.precision).toString();
  }

  /**
   * Returns the full wavelength of the given frequency in meters as a float to the specified decimal precision.
   * @returns {number}
   */
  toFloat() {
    return getFloat(this.valueInMeters, this.precision);
  }

  /**
   * Sets the precision for the Wavelength object.
   * @param {number} precision
   */
  setPrecision(precision) {
    /**
     * @type {number}
     */
    this.precision = precision;
  }

  /**
   * Returns the full wavelength of the given frequency in centimeters as a float to the specified decimal precision.
   * @returns {number}
   */
  toCentimeters() {
    return metersToCentimeters(this.valueInMeters, this.precision);
  }

  /**
   * Returns the full wavelength of the given frequency in feet as a float to the specified decimal precision.
   * @returns {number}
   */
  toFeet() {
    return metersToFeet(this.valueInMeters, this.precision);
  }

  /**
   * Returns the full wavelength of the given frequency in inches as a float to the specified decimal precision.
   * @returns {number}
   */
  toInches() {
    return metersToInches(this.valueInMeters, this.precision);
  }

  /**
   * Returns 3/4 wavelength of the given frequency in the specified unit as a
   * float to the specified decimal precision.
   * @param {string} [unit = 'm'] - use either 'm' for meters, 'cm' for centimeters, 'f' for feet, or 'in' for inches
   * @returns {number}
   */
  toThreeQuartersWavelength(unit = 'm') {
    const threeQuartersWavelength = this.valueInMeters * .75;
    return meterConversion(unit, threeQuartersWavelength, this.precision);
  }

  /**
   * Returns 5/8 wavelength of the given frequency in the specified unit as a
   * float to the specified decimal precision.
   * @param {string} [unit = 'm'] - use either 'm' for meters, 'cm' for centimeters, 'f' for feet, or 'in' for inches
   * @returns {number}
   */
  toFiveEighthsWavelength(unit = 'm') {
    const fiveEighthsWavelength = this.valueInMeters * .625;
    return meterConversion(unit, fiveEighthsWavelength, this.precision);
  }

  /**
   * Returns 1/2 wavelength of the given frequency in the specified unit as a
   * float to the specified decimal precision.
   * @param {string} [unit = 'm'] - use either 'm' for meters, 'cm' for centimeters, 'f' for feet, or 'in' for inches
   * @returns {number}
   */
  toHalfWavelength(unit = 'm') {
    const halfWavelength = this.valueInMeters * .5;
    return meterConversion(unit, halfWavelength, this.precision);
  }

  /**
   * Returns 1/4 wavelength of the given frequency in the specified unit as a
   * float to the specified decimal precision.
   * @param {string} [unit = 'm'] - use either 'm' for meters, 'cm' for centimeters, 'f' for feet, or 'in' for inches
   * @returns {number}
   */
  toQuarterWavelength(unit = 'm') {
    const quarterWavelength = this.valueInMeters * .25;
    return meterConversion(unit, quarterWavelength, this.precision);
  }

}


export default Wavelength;