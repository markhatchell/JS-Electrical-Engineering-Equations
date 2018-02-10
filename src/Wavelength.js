'use strict';




import { getFloat, metersToCentimeters, metersToFeet, metersToInches } from "./utils";

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

    switch(unit) {
      case 'cm':
        return metersToCentimeters(threeQuartersWavelength, this.precision);
      case 'm':
        return getFloat(threeQuartersWavelength, this.precision);
      case 'f':
        return metersToFeet(threeQuartersWavelength, this.precision);
      case 'in':
        return metersToInches(threeQuartersWavelength, this.precision);
    }
  }

  toFiveEighthsWavelength(unit = 'm') {
    const fiveEighthsWavelength = this.valueInMeters * .625;
    switch(unit) {
      case 'cm':
        return metersToCentimeters(fiveEighthsWavelength, this.precision);
      case 'm':
        return getFloat(fiveEighthsWavelength, this.precision);
      case 'f':
        return metersToFeet(fiveEighthsWavelength, this.precision);
      case 'in':
        return metersToInches(fiveEighthsWavelength, this.precision);
    }
  }

  toHalfWavelength(unit = 'm') {
    const halfWavelength = this.valueInMeters * .5;
    switch(unit) {
      case 'cm':
        return metersToCentimeters(halfWavelength, this.precision);
      case 'm':
        return getFloat(halfWavelength, this.precision);
      case 'f':
        return metersToFeet(halfWavelength, this.precision);
      case 'in':
        return metersToInches(halfWavelength, this.precision);
    }
  }

  toQuarterWavelength(unit = 'm') {
    const quarterWavelength = this.valueInMeters * .25;
    switch(unit) {
      case 'cm':
        return metersToCentimeters(quarterWavelength, this.precision);
      case 'm':
        return getFloat(quarterWavelength, this.precision);
      case 'f':
        return metersToFeet(quarterWavelength, this.precision);
      case 'in':
        return metersToInches(quarterWavelength, this.precision);
    }
  }

}


export default Wavelength;