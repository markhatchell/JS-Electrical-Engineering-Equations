const OhmsLaw = require('./Ohms-Law');


describe('OhmsLaw', () => {

  test('if current is .5 and volts are 10 then resistance should be 20 and wattage should be 5', () => {
    expect(OhmsLaw.calcWattsResistance(.5, 10)).toEqual({
      resistance: 20,
      watts: 5
    })
  });

  test('if current is .5 and resistance is 20 then volts should be 10 and wattage should be 5', () => {
    expect(OhmsLaw.calcWattsVoltage(20, .5)).toEqual({
      voltage: 10,
      watts: 5
    })
  });

  test('if current is .5 and wattage is 5 then resistance should be 20 and voltage should be 10', () => {
    expect(OhmsLaw.calcVoltageResistance(.5, 5)).toEqual({
      voltage: 10,
      resistance: 20
    })
  });

  test('if wattage is 5 and volts are 10 then resistance should be 20 and current should be .5', () => {
    expect(OhmsLaw.calcCurrentResistance(5, 10)).toEqual({
      resistance: 20,
      current: .5
    })
  });

  test('if wattage is 5 and resistance is 20 then voltage should be 10 and current should be .5', () => {
    expect(OhmsLaw.calcVoltageCurrent(20, 5)).toEqual({
      voltage: 10,
      current: .5
    })
  });

  test('if volts are 10 and resistance is 20 then watts should be 5 and current should be .5', () => {
    expect(OhmsLaw.calcWattsCurrent(20, 10)).toEqual({
      watts: 5,
      current: .5
    })
  });

});
