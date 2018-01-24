
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

  frequencyInMegahertz = 0;
  valueInMeters = 0;
  precision = 0;

  constructor(frequencyInMegahertz, precision = 4) {
    if (typeof frequencyInMegahertz === 'undefined') {
      throw Error('Need a frequency to init a Wavelength');
    }
    if (typeof precision === 'undefined') {
      precision = 4;
    }
    this.frequencyInMegahertz = parseFloat(frequencyInMegahertz);
    this.valueInMeters = 300 / this.frequencyInMegahertz;
    this.setPrecision(precision);
  }

  toString() {
    return this.valueInMeters.toPrecision(this.precision);
  }

  toStringWithPrecision(p) {
    return this.valueInMeters.toPrecision(p);
  }

  setPrecision(p) {
    this.precision = p;
  }

  toFeet() {
    return metersToFeet(this.valueInMeters);
  }

  toInches() {
    return metersToInches(this.valueInMeters);
  }

  toFeetWithPrecision(p) {
    return metersToFeet(this.valueInMeters, p);
  }

  toInchesWithPrecision(p) {
    return metersToInches(this.valueInMeters, p);
  }

}