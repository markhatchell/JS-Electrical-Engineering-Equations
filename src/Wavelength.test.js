const Wavelength = require('./Wavelength').default;


describe('Wavelength', () => {
  let wavelength = new Wavelength('300');

  test('should throw error when initialized with out a frequency', () => {
    expect(() => {
      new Wavelength()
    }).toThrowError('Need a frequency to init a Wavelength');
  });


  test('should initialize with a wavelength and output as string', () => {
    expect(wavelength.toString()).toEqual("1.000");
  });

  test('should initialize with a wavelength and output as float', () => {
    expect(wavelength.toFloat()).toEqual(1.0);
  });

  test('should set precision to 1', () => {
    wavelength.setPrecision(1);
    expect(wavelength.toString()).toEqual("1");
    wavelength.setPrecision(4);
  });

  // meters tests
  test('should show full wavelength in meters as 1.000', () => {
    expect(wavelength.toString()).toEqual("1.000");
    expect(wavelength.toFloat()).toEqual(1.000);
  });

  test('should show three quarters wavelength in meters as 0.7500', () => {
    wavelength.setPrecision(4);
    expect(wavelength.toThreeQuartersWavelength('m')).toEqual("0.7500");
    expect(parseFloat(wavelength.toThreeQuartersWavelength('m'))).toEqual(0.7500);
  });

  test('should show five eighths half wavelength in meters as 0.6250', () => {
    wavelength.setPrecision(4);
    expect(wavelength.toFiveEighthsWavelength('m')).toEqual("0.6250");
    expect(parseFloat(wavelength.toFiveEighthsWavelength('m'))).toEqual(0.6250);
  });

  test('should show one half wavelength in meters as 0.5000', () => {
    wavelength.setPrecision(4);
    expect(wavelength.toHalfWavelength('m')).toEqual("0.5000");
    expect(parseFloat(wavelength.toHalfWavelength('m'))).toEqual(0.5000);
  });

  test('should show one quarter wavelength in meters as 0.2500', () => {
    wavelength.setPrecision(4);
    expect(wavelength.toQuarterWavelength('m')).toEqual("0.2500");
    expect(parseFloat(wavelength.toQuarterWavelength('m'))).toEqual(0.2500);
  });

  // centimeters tests
  test('should show full wavelength in centimeters as 100.0', () => {
    expect(wavelength.toCentimeters()).toEqual("100.0");
    expect(parseFloat(wavelength.toCentimeters())).toEqual(100);
  });

  test('should show three quarters wavelength in centimeters as 75.00', () => {
    wavelength.setPrecision(4);
    expect(wavelength.toThreeQuartersWavelength('cm')).toEqual("75.00");
    expect(parseFloat(wavelength.toThreeQuartersWavelength('cm'))).toEqual(75.00);
  });

  test('should show five eighths half wavelength in centimeters as 62.50', () => {
    wavelength.setPrecision(4);
    expect(wavelength.toFiveEighthsWavelength('cm')).toEqual("62.50");
    expect(parseFloat(wavelength.toFiveEighthsWavelength('cm'))).toEqual(62.50);
  });

  test('should show one half wavelength in centimeters as 50.00', () => {
    wavelength.setPrecision(4);
    expect(wavelength.toHalfWavelength('cm')).toEqual("50.00");
    expect(parseFloat(wavelength.toHalfWavelength('cm'))).toEqual(50.00);
  });

  test('should show one quarter wavelength in centimeters as 25.00', () => {
    wavelength.setPrecision(4);
    expect(wavelength.toQuarterWavelength('cm')).toEqual("25.00");
    expect(parseFloat(wavelength.toQuarterWavelength('cm'))).toEqual(25.00);
  });

  // feet tests

  test('should show full wavelength in feet as 3.281', () => {
    wavelength.setPrecision(4);
    expect(wavelength.toFeet()).toEqual("3.281");
    expect(parseFloat(wavelength.toFeet())).toEqual(3.281);
  });

  test('should show three quarters wavelength in feet as 2.4611', () => {
    wavelength.setPrecision(4);
    expect(wavelength.toThreeQuartersWavelength('f')).toEqual("2.461");
    expect(parseFloat(wavelength.toThreeQuartersWavelength('f'))).toEqual(2.461);
  });

  test('should show five eighths half wavelength in feet as 2.051', () => {
    wavelength.setPrecision(4);
    expect(wavelength.toFiveEighthsWavelength('f')).toEqual("2.051");
    expect(parseFloat(wavelength.toFiveEighthsWavelength('f'))).toEqual(2.051);
  });

  test('should show one half wavelength in feet as 1.640', () => {
    wavelength.setPrecision(4);
    expect(wavelength.toHalfWavelength('f')).toEqual("1.640");
    expect(parseFloat(wavelength.toHalfWavelength('f'))).toEqual(1.640);
  });

  test('should show one quarter wavelength in feet as 0.8202', () => {
    wavelength.setPrecision(4);
    expect(wavelength.toQuarterWavelength('f')).toEqual("0.8202");
    expect(parseFloat(wavelength.toQuarterWavelength('f'))).toEqual(0.8202);
  });


  // inches tests

  test('should show full wavelength in inches as 39.37', () => {
    wavelength.setPrecision(4);
    expect(wavelength.toInches()).toEqual("39.37");
    expect(parseFloat(wavelength.toInches())).toEqual(39.37);
  });

  test('should show three quarters wavelength in feet as 29.53', () => {
    wavelength.setPrecision(4);
    expect(wavelength.toThreeQuartersWavelength('in')).toEqual("29.53");
    expect(parseFloat(wavelength.toThreeQuartersWavelength('in'))).toEqual(29.53);
  });

  test('should show five eighths half wavelength in feet as 24.61', () => {
    wavelength.setPrecision(4);
    expect(wavelength.toFiveEighthsWavelength('in')).toEqual("24.61");
    expect(parseFloat(wavelength.toFiveEighthsWavelength('in'))).toEqual(24.61);
  });

  test('should show one half wavelength in feet as 19.69', () => {
    wavelength.setPrecision(4);
    expect(wavelength.toHalfWavelength('in')).toEqual("19.69");
    expect(parseFloat(wavelength.toHalfWavelength('in'))).toEqual(19.69);
  });

  test('should show one quarter wavelength in feet as 9.843', () => {
    wavelength.setPrecision(4);
    expect(wavelength.toQuarterWavelength('in')).toEqual("9.843");
    expect(parseFloat(wavelength.toQuarterWavelength('in'))).toEqual(9.843);
  });




  // test('if current is .5 and volts are 10 then resistance should be 20 and wattage should be 5', () => {
  //   expect(OhmsLaw.calcWattsResistance(.5, 10)).toEqual({
  //     resistance: 20,
  //     watts: 5
  //   })
  // });

});
