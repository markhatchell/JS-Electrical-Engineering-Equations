'use strict';

import { getFloat } from "./utils";

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
 * either set the aH or coulombs of the battery for capacity
 */
class Battery {

  constructor() {
    this.battery = {
      "coulombs": 0,
      "ampHours": 0
    };

    this.runtime = {
      totalMin: 0,
      totalHours: 0,
      totalSeconds: 0
    };

    this.efficiency = .8;
    this.precision = 4;
    this.currentDraw = 0;
  }

  setCurrentDraw(amps) {
    this.currentDraw = amps;
  }

  setBatteryCapacityInAmpHours(ampHours) {
    this.battery.ampHours = ampHours;
    this.battery.coulombs = ampHours * 3600;

  }

  getBatteryCapacityInAmpHours() {
    return getFloat(this.battery.ampHours, this.precision);
  }

  setBatteryCapacityInCoulombs(coulombs) {
    this.battery.coulombs = coulombs;
    this.battery.ampHours = coulombs / 3600;
  }

  getBatteryCapacityInCoulombs() {
    return getFloat(this.battery.coulombs, this.precision);
  }

  calculateRuntime() {
    this.runtime.totalHours = this.battery.ampHours / (this.currentDraw / this.efficiency);
    this.runtime.totalMin = this.runtime.totalHours * 60;
    this.runtime.totalSeconds = this.runtime.totalMin * 60;
    return this.getRunTime();
  }

  getRunTime() {
    return this.runtime;
  }

  getRunTimeInMin() {
    return getFloat(this.runtime.totalMin, this.precision);
  }

  getRunTimeInHours() {
    return getFloat(this.runtime.totalHours, this.precision);
  }

  setPrecision(integer = 4) {
    this.precision = integer;
  }

}

export default Battery;