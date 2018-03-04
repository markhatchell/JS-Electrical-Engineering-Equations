'use strict';

/**
 *
 * ResistorDivider is a class with methods that can be used without initializing.
 *
 * It provides the various methods for determining one of the four variables for each calculation.
 * if (calcVolts)
 {
     volts = voltsout*(ohms1+ohms2)/ohms2;
 }
 else if (calcOhms1)
 {
     ohms1 = volts*ohms2/voltsout-ohms2;
 }
 else if (calcOhms2)
 {
     ohms2 = voltsout*ohms1/(volts-voltsout);
 }
 else if (calcVoltsout)
 {
     voltsout = volts*ohms2/(ohms1+ohms2);
 }
 * @example
 *
 */
class ResistorDivider {

  /**
   *
   * equation is outputVoltage = (inputVoltage * resistor2) / (resistor1 + resistor2)
   *
   * @param {number} inputVoltage
   * @param {number} resistor1
   * @param {number} resistor2
   * @returns {{outputVoltage: number}}
   */
  static calcOutputVoltage(inputVoltage, resistor1, resistor2) {
    const outputVoltage = (inputVoltage * resistor2) / (resistor1 + resistor2);
    return {
      outputVoltage
    };
  }

  static calcResistor2(inputVoltage, outputVoltage, resistor1) {
    const resistor2 = (outputVoltage * resistor1) / (inputVoltage - outputVoltage);
    return {
      resistor2
    };
  }

  static calcResistor1(inputVoltage, outputVoltage, resistor2) {
    const resistor1 = ((inputVoltage * resistor2) / outputVoltage) - resistor2;
    return {
      resistor1
    };
  }

  static calcInputVoltage(outputVoltage, resistor1, resistor2) {
    const inputVoltage = ((outputVoltage * (resistor1 + resistor2)) / resistor2);
    return {
      inputVoltage
    };
  }

}


export default ResistorDivider;

