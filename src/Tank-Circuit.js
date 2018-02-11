'use strict';

/**
 * TankCircuit is a class with methods that can be used without initializing.
 *
 * Its methods provide calculations for a Tank Circuit (LC), (Inductor and Capacitor) resonant circuit.
 *
 * @example
 * const inductance  = 50 / 1000000000;
 * const capacitance = 50 / 1000000000000;
 * const frequency = TankCircuit.calcFrequency(inductance, capacitance);
 *
 * const frequency  = 100658424.20897408;
 * const capacitance = 50 / 1000000000000;
 * const inductance = TankCircuit.calcInductance(frequency, capacitance);
 *
 * const frequency  = 100658424.20897408;
 * const inductance  = 50 / 1000000000;
 * const capacitance = TankCircuit.calcCapacitance(frequency, inductance);
 *
 */
class TankCircuit {

  /**
   *
   * @param {number} inductance
   * @param {number} capacitance
   * @returns {number}
   */
  static calcFrequency(inductance, capacitance) {
    return 1 / (2 * Math.PI * Math.sqrt(inductance * capacitance));
  }

  /**
   *
   * @param {number} frequency
   * @param {number} capacitance
   * @returns {number}
   */
  static calcInductance(frequency, capacitance) {
    return 1 / ( 4 * Math.PI * Math.PI * ( frequency * frequency * capacitance));
  }

  /**
   *
   * @param {number} frequency
   * @param {number} inductance
   * @returns {number}
   */
  static calcCapacitance(frequency, inductance) {
    return 1 / ( 4 * Math.PI * Math.PI * ( frequency * frequency * inductance));
  }



}


export default TankCircuit;