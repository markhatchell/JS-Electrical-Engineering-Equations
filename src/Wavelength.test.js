const Wavelength = require('./Wavelength').default;


describe('Wavelength', () => {
  let wavelength = new Wavelength(300);

  test('should throw error when initialized without a frequency', () => {
    expect(() => {
      new Wavelength()
    }).toThrowError('Need a frequency to init a Wavelength');
  });

  test('should throw error when initialized with a string as frequency', () => {
    expect(() => {
      new Wavelength('300')
    }).toThrowError('Frequency should be a number');
  });


  test('should initialize with a wavelength and output as string', () => {
    expect(wavelength.toString()).toEqual("1");
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
    expect(wavelength.toString()).toEqual("1");
    expect(wavelength.toFloat()).toEqual(1.000);
  });

  test('toThreeQuartersWavelength should default to meters as 0.7500', () => {
    wavelength.setPrecision(4);
    expect(wavelength.toThreeQuartersWavelength()).toEqual(0.7500);
  });

  test('should show three quarters wavelength in meters as 0.7500', () => {
    wavelength.setPrecision(4);
    expect(wavelength.toThreeQuartersWavelength('m')).toEqual(0.7500);
  });

  test('toFiveEighthsWavelength should default to meters as 0.6250', () => {
    wavelength.setPrecision(4);
    expect(wavelength.toFiveEighthsWavelength()).toEqual(0.6250);
  });

  test('should show five eighths half wavelength in meters as 0.6250', () => {
    wavelength.setPrecision(4);
    expect(wavelength.toFiveEighthsWavelength('m')).toEqual(0.6250);
  });

  test('toHalfWavelength should default to meters as 0.5000', () => {
    wavelength.setPrecision(4);
    expect(wavelength.toHalfWavelength()).toEqual(0.5000);
  });

  test('should show one half wavelength in meters as 0.5000', () => {
    wavelength.setPrecision(4);
    expect(wavelength.toHalfWavelength('m')).toEqual(0.5000);
  });

  test('toQuarterWavelength should default to meters as 0.2500', () => {
    wavelength.setPrecision(4);
    expect(wavelength.toQuarterWavelength()).toEqual(0.2500);
  });

  test('should show one quarter wavelength in meters as 0.2500', () => {
    wavelength.setPrecision(4);
    expect(wavelength.toQuarterWavelength('m')).toEqual(0.2500);
  });

  // centimeters tests
  test('should show full wavelength in centimeters as 100.0', () => {
    expect(wavelength.toCentimeters()).toEqual(100.0);
  });

  test('should show three quarters wavelength in centimeters as 75.00', () => {
    wavelength.setPrecision(4);
    expect(wavelength.toThreeQuartersWavelength('cm')).toEqual(75.00);
  });

  test('should show five eighths half wavelength in centimeters as 62.50', () => {
    wavelength.setPrecision(4);
    expect(wavelength.toFiveEighthsWavelength('cm')).toEqual(62.50);
  });

  test('should show one half wavelength in centimeters as 50.00', () => {
    wavelength.setPrecision(4);
    expect(wavelength.toHalfWavelength('cm')).toEqual(50.00);
  });

  test('should show one quarter wavelength in centimeters as 25.00', () => {
    wavelength.setPrecision(4);
    expect(wavelength.toQuarterWavelength('cm')).toEqual(25.00);
  });

  // feet tests

  test('should show full wavelength in feet as 3.2808', () => {
    wavelength.setPrecision(4);
    expect(wavelength.toFeet()).toEqual(3.2808);
  });

  test('should show three quarters wavelength in feet as 2.4606', () => {
    wavelength.setPrecision(4);
    expect(wavelength.toThreeQuartersWavelength('f')).toEqual(2.4606);
  });

  test('should show five eighths half wavelength in feet as 2.0505', () => {
    wavelength.setPrecision(4);
    expect(wavelength.toFiveEighthsWavelength('f')).toEqual(2.0505);
  });

  test('should show one half wavelength in feet as 1.6404', () => {
    wavelength.setPrecision(4);
    expect(wavelength.toHalfWavelength('f')).toEqual(1.6404);
  });

  test('should show one quarter wavelength in feet as 0.8202', () => {
    wavelength.setPrecision(4);
    expect(wavelength.toQuarterWavelength('f')).toEqual(0.8202);
  });


  // inches tests

  test('should show full wavelength in inches as 39.3701', () => {
    wavelength.setPrecision(4);
    expect(wavelength.toInches()).toEqual(39.3701);
  });

  test('should show three quarters wavelength in inches as 29.5276', () => {
    wavelength.setPrecision(4);
    expect(wavelength.toThreeQuartersWavelength('in')).toEqual(29.5276);
  });

  test('should show five eighths half wavelength in inches as 24.6063', () => {
    wavelength.setPrecision(4);
    expect(wavelength.toFiveEighthsWavelength('in')).toEqual(24.6063);
  });

  test('should show one half wavelength in inches as 19.685', () => {
    wavelength.setPrecision(4);
    expect(wavelength.toHalfWavelength('in')).toEqual(19.685);
  });


  test('should show one quarter wavelength in feet as 9.843', () => {
    wavelength.setPrecision(4);
    expect(wavelength.toQuarterWavelength('in')).toEqual(9.8425);
  });




  // test('if current is .5 and volts are 10 then resistance should be 20 and wattage should be 5', () => {
  //   expect(OhmsLaw.calcWattsResistance(.5, 10)).toEqual({
  //     resistance: 20,
  //     watts: 5
  //   })
  // });

});
