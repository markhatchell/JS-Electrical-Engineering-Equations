
/**
 * Battery runtime object
 */
class BatteryRuntime {

  /**
   *
   * @param {number} totalMin
   * @param {number} totalHours
   * @param {number} totalSeconds
   * @return {BatteryRuntime}
   */

  constructor(totalMin = 0, totalHours = 0, totalSeconds = 0) {
    /**
     * @type {number}
     */
    this.totalMin = totalMin;
    /**
     * @type {number}
     */
    this.totalHours = totalHours;
    /**
     * @type {number}
     */
    this.totalSeconds = totalSeconds;
  }
}

export default BatteryRuntime