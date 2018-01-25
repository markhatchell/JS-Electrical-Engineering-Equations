'use strict';

class OhmsLaw {
  static calcWattsResistance(current, voltage) {
    const calculatedWatts = parseFloat(current) * parseFloat(voltage);
    const calculatedResistance = Math.pow(parseFloat(voltage), 2) / calculatedWatts;
    return {
      resistance: calculatedResistance,
      watts: calculatedWatts
    };
  }
  static calcWattsCurrent(resistance, voltage) {
    const calculatedCurrent = parseFloat(voltage) / parseFloat(resistance);
    const calculatedWatts = calculatedCurrent * parseFloat(voltage);
    return {
      current: calculatedCurrent,
      watts: calculatedWatts
    };
  }

  static calcWattsVoltage(resistance, current) {
    const calculatedVoltage = parseFloat(current) * parseFloat(resistance);
    const calculatedWatts = parseFloat(current) * calculatedVoltage;
    return {
      voltage: calculatedVoltage,
      watts: calculatedWatts
    };
  }

  static calcVoltageCurrent(resistance, watts) {
    const calculatedVoltage = Math.sqrt(parseFloat(watts) * parseFloat(resistance));
    const calculatedCurrent = calculatedVoltage / parseFloat(resistance);
    return {
      voltage: calculatedVoltage,
      current: calculatedCurrent
    };
  }

  static calcVoltageResistance(current, watts) {
    const calculatedVoltage = parseFloat(watts) / parseFloat(current);
    const calculatedResistance = Math.pow(calculatedVoltage, 2) / parseFloat(watts);
    return {
      voltage: calculatedVoltage,
      resistance: calculatedResistance
    };
  }

  static calcCurrentResistance(watts, voltage) {
    const calculatedCurrent = parseFloat(watts) / parseFloat(voltage);
    const calculatedResistance = Math.pow(parseFloat(voltage), 2) / parseFloat(watts);
    return {
      current: calculatedCurrent,
      resistance: calculatedResistance
    };
  }
}


export default OhmsLaw;