'use strict';

/**
 *
 * ResistorDivider is a class with methods that can be used without initializing.
 *
 * It provides the various methods for determining one of the four variables for each calculation.
 *
 * @example
 *
 * cont { outputVoltage } = ResistorDivider.calcOutputVoltage(10, 1000, 1000);
 * cont { resistor1 } = ResistorDivider.calcResistor1(10, 5, 1000);
 * cont { resistor2 } = ResistorDivider.calcResistor2(10, 5, 1000);
 * cont { inputVoltage } = ResistorDivider.calcInputVoltage(5, 1000, 1000);
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

  /**
   *
   * equation is resistor2 = (outputVoltage * resistor1) / (inputVoltage - outputVoltage)
   *
   * @param {number} inputVoltage
   * @param {number} outputVoltage
   * @param {number} resistor1
   * @returns {{resistor2: number}}
   */
  static calcResistor2(inputVoltage, outputVoltage, resistor1) {
    const resistor2 = (outputVoltage * resistor1) / (inputVoltage - outputVoltage);
    return {
      resistor2
    };
  }

  /**
   *
   * equation is resistor1 = ((inputVoltage * resistor2) / outputVoltage) - resistor2
   *
   * @param {number} inputVoltage
   * @param {number} outputVoltage
   * @param {number} resistor2
   * @returns {{resistor1: number}}
   */
  static calcResistor1(inputVoltage, outputVoltage, resistor2) {
    const resistor1 = ((inputVoltage * resistor2) / outputVoltage) - resistor2;
    return {
      resistor1
    };
  }

  /**
   *
   * equation is inputVoltage = ((outputVoltage * (resistor1 + resistor2)) / resistor2)
   *
   * @param {number} outputVoltage
   * @param {number} resistor1
   * @param {number} resistor2
   * @returns {{inputVoltage: number}}
   */
  static calcInputVoltage(outputVoltage, resistor1, resistor2) {
    const inputVoltage = ((outputVoltage * (resistor1 + resistor2)) / resistor2);
    return {
      inputVoltage
    };
  }

}

export default ResistorDivider;
