const TankCircuit = require('./Tank-Circuit').default;


describe('TankCircuit', () => {

  test('if InductanceInNanoHenries is 50 and CapacitanceInPicoFarads is 50 then calculatedFrequencyInHertz should be 100658424.20897408', () => {
    const inductance  = parseFloat(50) / 1000000000;
    const capacitance = parseFloat(50) / 1000000000000;

    expect(TankCircuit.calcFrequency(inductance, capacitance).calculatedFrequencyInHertz).toEqual(100658424.20897408)
  });

  test('if frequency in Hertz is 100658424.20897408 and CapacitanceInPicoFarads is 50 then calculatedInductanceInHenries should be 0.000000050', () => {
    const frequency  = 100658424.20897408;
    const capacitance = parseFloat(50) / 1000000000000;

    expect(TankCircuit.calcInductance(frequency, capacitance).calculatedInductanceInHenries).toEqual(0.000000050)
  });

  test('if frequency in Hertz is 100658424.20897408 and InductanceInNanoHenries is 50 then calculatedCapacitanceInFarads should be 0.000000000050', () => {
    const frequency  = 100658424.20897408;
    const inductance  = parseFloat(50) / 1000000000;

    expect(TankCircuit.calcCapacitance(frequency, inductance).calculatedCapacitanceInFarads).toEqual(0.000000000050)
  });



});
