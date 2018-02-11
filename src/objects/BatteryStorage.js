
/**
 * Battery Storage object
 */
class BatteryStorage {

  /**
   *
   * @param {number} coulombs
   * @param {number} ampHours
   * @return {BatteryStorage}
   *
   */

  constructor(coulombs = 0, ampHours = 0) {
    /**
     * @type {number}
     */
    this.coulombs = coulombs;
    /**
     * @type {number}
     */
    this.ampHours = ampHours;
  }
}

export default BatteryStorage