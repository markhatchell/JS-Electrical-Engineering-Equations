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

function Wavelength(frequencyInMegahertz, precision = 4) {
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

Wavelength.prototype.toString = function() {
  return this.valueInMeters.toPrecision(this.precision);
};

Wavelength.prototype.setPrecision = function(p) {
  this.precision = p;
};

Wavelength.prototype.toCentimeters = function() {
  return metersToCentimeters(this.valueInMeters);
};

Wavelength.prototype.toFeet = function() {
  return metersToFeet(this.valueInMeters, this.precision);
};

Wavelength.prototype.toInches = function() {
  return metersToInches(this.valueInMeters, this.precision);
};

Wavelength.prototype.toThreeQuartersWavelength = function(unit = 'm') {
  const threeQuartersWavelength = this.valueInMeters * .75;
  if (typeof unit === 'undefined') {
    unit = 'm';
  }

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
};

Wavelength.prototype.toFiveEighthsWavelength = function(unit = 'm') {
  const fiveEighthsWavelength = this.valueInMeters * .625;
  if (typeof unit === 'undefined') {
    unit = 'm';
  }
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
};

Wavelength.prototype.toHalfWavelength = function(unit = 'm') {
  const halfWavelength = this.valueInMeters * .5;
  if (typeof unit === 'undefined') {
    unit = 'm';
  }
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
};

Wavelength.prototype.toQuarterWavelength = function(unit = 'm') {
  const quaterWavelength = this.valueInMeters * .25;
  if (typeof unit === 'undefined') {
    unit = 'm';
  }
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
};

export default Wavelength;