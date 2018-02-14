const RCCircuit = require('./RC-Circuit');


describe('TankCircuit', () => {

  test('if resistance in ohms is 1000 and capacitance in farads is .00000001 then cut-off frequency should be 15915.494309189537', () => {
    const resistance  = 1000;
    const capacitance = .00000001;

    expect(RCCircuit.lowPassFilter(resistance, capacitance)).toEqual(15915.494309189537)
  });


});
