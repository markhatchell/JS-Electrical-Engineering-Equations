'use strict';

class TankCircuit {

  static calcFrequency(inductance, capacitance) {
    const calculatedFrequencyInHertz = 1 / (2 * Math.PI * Math.sqrt(inductance * capacitance));
    return {
      calculatedFrequencyInHertz: calculatedFrequencyInHertz
    };
  }


  static calcInductance(frequency, capacitance) {
    const calculatedInductanceInHenries = 1 / ( 4 * Math.PI * Math.PI * ( frequency * frequency * capacitance));

    return {
      calculatedInductanceInHenries: calculatedInductanceInHenries
    };
  }

  static calcCapacitance(frequency, inductance) {
    const calculatedCapacitanceInFarads = 1 / ( 4 * Math.PI * Math.PI * ( frequency * frequency * inductance));

    return {
      calculatedCapacitanceInFarads: calculatedCapacitanceInFarads
    };
  }



}


export default TankCircuit;