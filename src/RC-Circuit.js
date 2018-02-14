'use strict';

/**
 * TankCircuit is a class with methods that can be used without initializing.
 *
 * Its methods provide calculations for a Tank Circuit (LC), (Inductor and Capacitor) resonant circuit.
 *
 * @example
 *
 * RCCircuit.lowPassFilter(1000, 1 / 100000000);
 *
 */
class RCCircuit {

  /**
   *
   * Take a value of resistance in ohms and value of capacitance in farads and calculates the
   * cut off frequency of a low-pass circuit. The return value is in hertz.
   *
   * @param {number} resistance
   * @param {number} capacitance
   * @returns {number}
   */
  static lowPassFilter(resistance, capacitance) {
    return 1 / (2 * Math.PI * resistance * capacitance);
  }


}

export default RCCircuit;