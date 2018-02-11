const TankCircuit = require('./Tank-Circuit');


describe('TankCircuit', () => {

  test('if InductanceInNanoHenrys is 50 and CapacitanceInPicoFarads is 50 then calculatedFrequencyInHertz should be 100658424.20897408', () => {
    const inductance  = 50 / 1000000000;
    const capacitance = 50 / 1000000000000;

    expect(TankCircuit.calcFrequency(inductance, capacitance)).toEqual(100658424.20897408)
  });

  test('if frequency in Hertz is 100658424.20897408 and CapacitanceInPicoFarads is 50 then calculatedInductanceInHenrys should be 0.000000050', () => {
    const frequency  = 100658424.20897408;
    const capacitance = 50 / 1000000000000;

    expect(TankCircuit.calcInductance(frequency, capacitance)).toEqual(0.000000050)
  });

  test('if frequency in Hertz is 100658424.20897408 and InductanceInNanoHenrys is 50 then calculatedCapacitanceInFarads should be 0.000000000050', () => {
    const frequency  = 100658424.20897408;
    const inductance  = 50 / 1000000000;

    expect(TankCircuit.calcCapacitance(frequency, inductance)).toEqual(0.000000000050)
  });



});
