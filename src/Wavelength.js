'use strict';

import { getFloat, meterConversion, metersToCentimeters, metersToFeet, metersToInches } from "./utils";

class Wavelength {
  constructor(frequencyInMegahertz, precision = 4) {
    if (typeof frequencyInMegahertz === 'undefined') {
      throw new Error('Need a frequency to init a Wavelength');
    }
    this.frequencyInMegahertz = parseFloat(frequencyInMegahertz);
    this.valueInMeters = 300 / this.frequencyInMegahertz;
    this.setPrecision(precision);
  }

  toString() {
    return getFloat(this.valueInMeters, this.precision).toString();
  }

  toFloat() {
    return getFloat(this.valueInMeters, this.precision);
  }

  setPrecision(p) {
    this.precision = p;
  }

  toCentimeters() {
    return metersToCentimeters(this.valueInMeters);
  }

  toFeet() {
    return metersToFeet(this.valueInMeters, this.precision);
  }

  toInches() {
    return metersToInches(this.valueInMeters, this.precision);
  }

  toThreeQuartersWavelength(unit = 'm') {
    const threeQuartersWavelength = this.valueInMeters * .75;
    return meterConversion(unit, threeQuartersWavelength, this.precision);
  }

  toFiveEighthsWavelength(unit = 'm') {
    const fiveEighthsWavelength = this.valueInMeters * .625;
    return meterConversion(unit, fiveEighthsWavelength, this.precision);
  }

  toHalfWavelength(unit = 'm') {
    const halfWavelength = this.valueInMeters * .5;
    return meterConversion(unit, halfWavelength, this.precision);
  }

  toQuarterWavelength(unit = 'm') {
    const quarterWavelength = this.valueInMeters * .25;
    return meterConversion(unit, quarterWavelength, this.precision);
  }

}


export default Wavelength;