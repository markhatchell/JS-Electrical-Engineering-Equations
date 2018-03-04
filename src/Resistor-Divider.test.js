const ResistorDivider = require("./Resistor-Divider");


describe('ResistorDivider', () => {

  test('if input voltage is 10 and both resistors are 1000 then output voltage should be 5', () => {
    expect(ResistorDivider.calcOutputVoltage(10, 1000, 1000)).toEqual({
      outputVoltage: 5
    })
  });

  test('if input voltage is 10, resistor1 is 10000, and resistor2 is 780 then output voltage should be 0.7235621521335807', () => {
    expect(ResistorDivider.calcOutputVoltage(10, 10000, 780)).toEqual({
      outputVoltage: 0.7235621521335807
    })
  });

  test('if input voltage is 10, resistor1 is 1000, and output voltage is 5 then resistor 2 should be 1000', () => {
    expect(ResistorDivider.calcResistor2(10, 5, 1000)).toEqual({
      resistor2: 1000
    })
  });

  test('if input voltage is 10, resistor1 is 10000, and output voltage is 0.7235621521335807 then resistor 2 should be 780', () => {
    expect(ResistorDivider.calcResistor2(10, 0.7235621521335807, 10000)).toEqual({
      resistor2: 780
    })
  });

  test('if input voltage is 10, resistor2 is 1000, and output voltage is 5 then resistor 1 should be 1000', () => {
    expect(ResistorDivider.calcResistor1(10, 5, 1000)).toEqual({
      resistor1: 1000
    })
  });

  test('if input voltage is 10, resistor2 is 780, and output voltage is 0.7235621521335807 then resistor 1 should be 10000', () => {
    expect(ResistorDivider.calcResistor1(10, 0.7235621521335807, 780)).toEqual({
      resistor1: 10000
    })
  });

  test('if output voltage is 5 and both resistors are 1000 then input voltage should be 10', () => {
    expect(ResistorDivider.calcInputVoltage(5, 1000, 1000)).toEqual({
      inputVoltage: 10
    })
  });

  test('if output voltage is 0.7235621521335807, resistor1 is 10000, and resistor2 is 780 then then input voltage should be 9.999999999999998', () => {
    expect(ResistorDivider.calcInputVoltage(0.7235621521335807, 10000, 780)).toEqual({
      inputVoltage: 9.999999999999998
    })
  });




});
