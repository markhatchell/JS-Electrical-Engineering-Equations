'use strict';


function metersToCentimeters(meters, precision = 4) {
  if (typeof precision === 'undefined') {
    precision = 4;
  }
  return (meters * 100).toPrecision(precision);
}

function metersToFeet(meters, precision = 4) {
  if (typeof precision === 'undefined') {
    precision = 4;
  }
  return (meters * 3.2808399).toPrecision(precision);
}

function metersToInches(meters, precision = 4) {
  if (typeof precision === 'undefined') {
    precision = 4;
  }
  return ((meters * 3.2808399) * 12).toPrecision(precision);
}

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
    return this.valueInMeters.toPrecision(this.precision);
  }

  toFloat() {
    return parseFloat(this.valueInMeters.toPrecision(this.precision));
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
        return (threeQuartersWavelength).toPrecision(this.precision);
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
        return (fiveEighthsWavelength).toPrecision(this.precision);
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
        return (halfWavelength).toPrecision(this.precision);
      case 'f':
        return metersToFeet(halfWavelength, this.precision);
      case 'in':
        return metersToInches(halfWavelength, this.precision);
    }
  }

  toQuarterWavelength(unit = 'm') {
    const quaterWavelength = this.valueInMeters * .25;
    switch(unit) {
      case 'cm':
        return metersToCentimeters(quaterWavelength, this.precision);
      case 'm':
        return (quaterWavelength).toPrecision(this.precision);
      case 'f':
        return metersToFeet(quaterWavelength, this.precision);
      case 'in':
        return metersToInches(quaterWavelength, this.precision);
    }
  }

}


export default Wavelength;