
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

  setPrecision(p) {
    this.precision = p;
  }

  toFeet() {
    return metersToFeet(this.valueInMeters);
  }

  toInches() {
    return metersToInches(this.valueInMeters);
  }

  toThreeQuartersWavelength(unit = 'm') {
    if (typeof unit === 'undefined') {
      unit = 'm';
    }
    switch(unit) {
      case 'm':
        return (this.valueInMeters * .75).toPrecision(this.precision);
      case 'f':
        return (metersToFeet(this.valueInMeters * .75)).toPrecision(this.precision);
      case 'in':
        return (metersToInches(this.valueInMeters * .75)).toPrecision(this.precision);
    }
  }

  toFiveEighthsWavelength(unit = 'm') {
    if (typeof unit === 'undefined') {
      unit = 'm';
    }
    switch(unit) {
      case 'm':
        return (this.valueInMeters * .625).toPrecision(this.precision);
      case 'f':
        return (metersToFeet(this.valueInMeters * .625)).toPrecision(this.precision);
      case 'in':
        return (metersToInches(this.valueInMeters * .625)).toPrecision(this.precision);
    }
  }

  toHalfWavelength(unit = 'm') {
    if (typeof unit === 'undefined') {
      unit = 'm';
    }
    switch(unit) {
      case 'm':
        return (this.valueInMeters * .5).toPrecision(this.precision);
      case 'f':
        return (metersToFeet(this.valueInMeters * .5)).toPrecision(this.precision);
      case 'in':
        return (metersToInches(this.valueInMeters * .5)).toPrecision(this.precision);
    }
  }

  toQuarterWavelength(unit = 'm') {
    if (typeof unit === 'undefined') {
      unit = 'm';
    }
    switch(unit) {
      case 'm':
        return (this.valueInMeters * .25).toPrecision(this.precision);
      case 'f':
        return (metersToFeet(this.valueInMeters * .25)).toPrecision(this.precision);
      case 'in':
        return (metersToInches(this.valueInMeters * .25)).toPrecision(this.precision);
    }
  }

}


export default Wavelength;