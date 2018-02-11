'use strict';

/**
 *
 * OhmsLaw is a class with methods that can be used without initializing.
 *
 * It provides the various methods for determining two of the four variables for each calculation.
 *
 * @example
 * const wattsAndResistance = OhmsLaw.calcWattsResistance(1, 5);
 * const wattsAndCurrent = OhmsLaw.calcWattsCurrent(100, 5);
 * const wattsAndVoltage = OhmsLaw.calcWattsVoltage(100, 1);
 * const voltageAndCurrent = OhmsLaw.calcVoltageCurrent(100, .5);
 * const voltageAndResistance = OhmsLaw.calcVoltageResistance(1, .5);
 * const currentAndResistance = OhmsLaw.calcVoltageResistance(.5, 9);
 *
 */
class OhmsLaw {

  /**
   *
   * equation is voltage^2 / (current * voltage)
   *
   * @param {number} current
   * @param {number} voltage
   * @returns {{watts: number, resistance: number}}
   */
  static calcWattsResistance(current, voltage) {
    const calculatedWatts = current * voltage;
    const calculatedResistance = Math.pow(voltage, 2) / calculatedWatts;
    return {
      watts: calculatedWatts,
      resistance: calculatedResistance
    };
  }

  /**
   *
   * @param {number} resistance
   * @param {number} voltage
   * @returns {{watts: number, current: number}}
   */
  static calcWattsCurrent(resistance, voltage) {
    const calculatedCurrent = voltage / resistance;
    const calculatedWatts = calculatedCurrent * voltage;
    return {
      watts: calculatedWatts,
      current: calculatedCurrent
    };
  }

  /**
   *
   * @param {number} resistance
   * @param {number} current
   * @returns {{watts: number, voltage: number}}
   */
  static calcWattsVoltage(resistance, current) {
    const calculatedVoltage = current * resistance;
    const calculatedWatts = current * calculatedVoltage;
    return {
      watts: calculatedWatts,
      voltage: calculatedVoltage
    };
  }

  /**
   *
   * @param {number} resistance
   * @param {number} watts
   * @returns {{voltage: number, current: number}}
   */
  static calcVoltageCurrent(resistance, watts) {
    const calculatedVoltage = Math.sqrt(watts * resistance);
    const calculatedCurrent = calculatedVoltage / resistance;
    return {
      voltage: calculatedVoltage,
      current: calculatedCurrent
    };
  }

  /**
   *
   * @param {number} current
   * @param {number} watts
   * @returns {{voltage: number, resistance: number}}
   */
  static calcVoltageResistance(current, watts) {
    const calculatedVoltage = watts / current;
    const calculatedResistance = Math.pow(calculatedVoltage, 2) / watts;
    return {
      voltage: calculatedVoltage,
      resistance: calculatedResistance
    };
  }

  /**
   *
   * @param {number} watts
   * @param {number} voltage
   * @returns {{current: number, resistance: number}}
   */
  static calcCurrentResistance(watts, voltage) {
    const calculatedCurrent = watts / voltage;
    const calculatedResistance = Math.pow(voltage, 2) / watts;
    return {
      current: calculatedCurrent,
      resistance: calculatedResistance
    };
  }
}


export default OhmsLaw;