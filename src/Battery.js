'use strict';

import { getFloat } from "./utils";
import BatteryStorage from "./objects/BatteryStorage";
import BatteryRuntime from "./objects/BatteryRuntime";

/*
* Facts
* 1 amp over 1 second is 1 coulombs
* 1 amp over 60 seconds is 60 coulombs
* 1 amp over 3600 seconds is 3600 coulombs
*
* Amp hours are amps times hours so (divide by amps to get hours) and (divide by hours to get amps)
*
* */

/**
 * Represents a Battery.
 *
 * Either set the aH or coulombs of the battery for capacity before calculating runtime.
 * @example
 * let battery = Battery();
 * battery.setBatteryCapacityInAmpHours(1);
 * battery.setCurrentDraw(1);
 * battery.calculateRuntime();
 * const runtimeInMin = battery.getRunTimeInMin();
 *
 */
class Battery {

  /**
   * Takes no parameters, and initializes a fresh battery object.
   */
  constructor() {

    /**
     * @type {BatteryStorage}
     */
    this.battery = new BatteryStorage();

    /**
    * @type {BatteryRuntime}
    */
    this.runtime = new BatteryRuntime();

    /**
     * @type {number}
     */
    this.efficiency = .8;

    /**
     * @type {number}
     */
    this.precision = 4;

    /**
     * @type {number}
     */
    this.currentDraw = 0;
  }

  /**
   * @param {number} amps - The current draw in amps.
   */
  setCurrentDraw(amps) {
    this.currentDraw = amps;
  }

  /**
   * @param {number} ampHours - The battery capacity in amp hours.
   * @return {undefined}
   */
  setBatteryCapacityInAmpHours(ampHours) {
    this.battery.ampHours = ampHours;
    this.battery.coulombs = ampHours * 3600;

  }

  /**
   * @return {number}
   */
  getBatteryCapacityInAmpHours() {
    return getFloat(this.battery.ampHours, this.precision);
  }

  /**
   * @param {number} coulombs - The battery capacity in coulombs.
   * @return {undefined}
   */
  setBatteryCapacityInCoulombs(coulombs) {
    this.battery.coulombs = coulombs;
    this.battery.ampHours = coulombs / 3600;
  }

  /**
   * @return {number}
   */
  getBatteryCapacityInCoulombs() {
    return getFloat(this.battery.coulombs, this.precision);
  }

  /**
   * @return {BatteryRuntime}
   */
  calculateRuntime() {
    this.runtime.totalHours = this.battery.ampHours / (this.currentDraw / this.efficiency);
    this.runtime.totalMin = this.runtime.totalHours * 60;
    this.runtime.totalSeconds = this.runtime.totalMin * 60;
    return this.getRunTime();
  }

  /**
   * @return {BatteryRuntime}
   */
  getRunTime() {
    return this.runtime;
  }

  /**
   * @return {number}
   */
  getRunTimeInMin() {
    return getFloat(this.runtime.totalMin, this.precision);
  }

  /**
   * @return {number}
   */
  getRunTimeInHours() {
    return getFloat(this.runtime.totalHours, this.precision);
  }

  /**
   * @param {number} integer - The floating precision.
   * @return {undefined}
   */
  setPrecision(integer = 4) {
    this.precision = integer;
  }

}

export default Battery;