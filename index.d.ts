// Type definitions for js-electrical-engineering-equations
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare namespace OhmsLaw{
	// OhmsLaw.calcWattsResistance.!ret
	
	/**
	 * 
	 */
	interface CalcWattsResistanceRet {
				
		/**
		 * 
		 */
		watts : number;
				
		/**
		 * 
		 */
		resistance : number;
	}
}
declare namespace OhmsLaw{
	// OhmsLaw.calcWattsCurrent.!ret
	
	/**
	 * 
	 */
	interface CalcWattsCurrentRet {
				
		/**
		 * 
		 */
		watts : number;
				
		/**
		 * 
		 */
		current : number;
	}
}
declare namespace OhmsLaw{
	// OhmsLaw.calcWattsVoltage.!ret
	
	/**
	 * 
	 */
	interface CalcWattsVoltageRet {
				
		/**
		 * 
		 */
		watts : number;
				
		/**
		 * 
		 */
		voltage : number;
	}
}
declare namespace OhmsLaw{
	// OhmsLaw.calcVoltageCurrent.!ret
	
	/**
	 * 
	 */
	interface CalcVoltageCurrentRet {
				
		/**
		 * 
		 */
		voltage : number;
				
		/**
		 * 
		 */
		current : number;
	}
}
declare namespace OhmsLaw{
	// OhmsLaw.calcVoltageResistance.!ret
	
	/**
	 * 
	 */
	interface CalcVoltageResistanceRet {
				
		/**
		 * 
		 */
		voltage : number;
				
		/**
		 * 
		 */
		resistance : number;
	}
}
declare namespace OhmsLaw{
	// OhmsLaw.calcCurrentResistance.!ret
	
	/**
	 * 
	 */
	interface CalcCurrentResistanceRet {
				
		/**
		 * 
		 */
		current : number;
				
		/**
		 * 
		 */
		resistance : number;
	}
}

/**
 * Takes a number and sets it to a given decimal precision.
 * 
 * @param {number} num
 * @param {number} precision
 * @return {number}
 * @param num 
 * @param precision 
 * @return  
 */
declare function getFloat(num : number, precision : number): number;

/**
 * Battery Storage object
 */
declare interface BatteryStorage {
		
	/**
	 * 
	 * @param coulombs 
	 * @param ampHours 
	 * @return  
	 */
	new (coulombs : number, ampHours : number): BatteryStorage;
}


/**
 * 
 */
declare namespace BatteryStorage{
		
	/**
	 * @type {number}
	 */
	export var coulombs : number;
		
	/**
	 * @type {number}
	 */
	export var ampHours : number;
}

/**
 * Battery runtime object
 */
declare interface BatteryRuntime {
		
	/**
	 * 
	 * @param totalMin 
	 * @param totalHours 
	 * @param totalSeconds 
	 * @return  
	 */
	new (totalMin : number, totalHours : number, totalSeconds : number): BatteryRuntime;
}


/**
 * 
 */
declare namespace BatteryRuntime{
		
	/**
	 * @type {number}
	 */
	export var totalMin : number;
		
	/**
	 * @type {number}
	 */
	export var totalHours : number;
		
	/**
	 * @type {number}
	 */
	export var totalSeconds : number;
}

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
 */
declare interface Battery {
		
	/**
	 * 
	 * @return  
	 */
	new (): Battery;
		
	/**
	 * @param {number} amps - The current draw in amps.
	 * @param amps 
	 */
	setCurrentDraw(amps : number): /* void */ any;
		
	/**
	 * @param {number} ampHours - The battery capacity in amp hours.
	 * @return {undefined}
	 * @param ampHours 
	 */
	setBatteryCapacityInAmpHours(ampHours : number): /* void */ any;
		
	/**
	 * @return {number}
	 * @return  
	 */
	getBatteryCapacityInAmpHours(): number;
		
	/**
	 * @param {number} coulombs - The battery capacity in coulombs.
	 * @return {undefined}
	 * @param coulombs 
	 */
	setBatteryCapacityInCoulombs(coulombs : number): /* void */ any;
		
	/**
	 * @return {number}
	 * @return  
	 */
	getBatteryCapacityInCoulombs(): number;
		
	/**
	 * @return {BatteryRuntime}
	 * @return  
	 */
	calculateRuntime(): BatteryRuntime;
		
	/**
	 * @return {BatteryRuntime}
	 * @return  
	 */
	getRunTime(): /* !this.runtime */ any;
		
	/**
	 * @return {number}
	 * @return  
	 */
	getRunTimeInMin(): number;
		
	/**
	 * @return {number}
	 * @return  
	 */
	getRunTimeInHours(): number;
		
	/**
	 * @param {number} integer - The floating precision.
	 * @return {undefined}
	 * @param integer 
	 */
	setPrecision(integer : number): /* void */ any;
		
	/**
	 * @type {BatteryStorage}
	 */
	battery : BatteryStorage;
		
	/**
	 * @type {BatteryRuntime}
	 */
	runtime : BatteryRuntime;
		
	/**
	 * @type {number}
	 */
	efficiency : number;
		
	/**
	 * @type {number}
	 */
	precision : number;
		
	/**
	 * @type {number}
	 */
	currentDraw : number;
}

/**
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
 */
declare interface OhmsLaw {
		
	/**
	 * 
	 * @return  
	 */
	new (): OhmsLaw;
}


/**
 * 
 */
declare namespace OhmsLaw{
		
	/**
	 * 
	 * @param current 
	 * @param voltage 
	 * @return  
	 */
	function calcWattsResistance(current : number, voltage : number): OhmsLaw.CalcWattsResistanceRet;
		
	/**
	 * 
	 * @param resistance 
	 * @param voltage 
	 * @return  
	 */
	function calcWattsCurrent(resistance : number, voltage : number): OhmsLaw.CalcWattsCurrentRet;
		
	/**
	 * 
	 * @param resistance 
	 * @param current 
	 * @return  
	 */
	function calcWattsVoltage(resistance : number, current : number): OhmsLaw.CalcWattsVoltageRet;
		
	/**
	 * 
	 * @param resistance 
	 * @param watts 
	 * @return  
	 */
	function calcVoltageCurrent(resistance : number, watts : number): OhmsLaw.CalcVoltageCurrentRet;
		
	/**
	 * 
	 * @param current 
	 * @param watts 
	 * @return  
	 */
	function calcVoltageResistance(current : number, watts : number): OhmsLaw.CalcVoltageResistanceRet;
		
	/**
	 * 
	 * @param watts 
	 * @param voltage 
	 * @return  
	 */
	function calcCurrentResistance(watts : number, voltage : number): OhmsLaw.CalcCurrentResistanceRet;
}

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
 */
declare interface TankCircuit {
		
	/**
	 * 
	 * @return  
	 */
	new (): TankCircuit;
}


/**
 * 
 */
declare namespace TankCircuit{
		
	/**
	 * 
	 * @param inductance 
	 * @param capacitance 
	 * @return  
	 */
	function calcFrequency(inductance : number, capacitance : number): number;
		
	/**
	 * 
	 * @param frequency 
	 * @param capacitance 
	 * @return  
	 */
	function calcInductance(frequency : number, capacitance : number): number;
		
	/**
	 * 
	 * @param frequency 
	 * @param inductance 
	 * @return  
	 */
	function calcCapacitance(frequency : number, inductance : number): number;
}

/**
 * Takes meters and converts them to centimeters with a given precision.
 * @param {number} meters
 * @param {number} precision
 * @return {number}
 * @param meters 
 * @param precision 
 * @return  
 */
declare function metersToCentimeters(meters : number, precision : number): number;

/**
 * Takes meters and converts them to feet with a given precision.
 * @param {number} meters
 * @param {number} precision
 * @return {number}
 * @param meters 
 * @param precision 
 * @return  
 */
declare function metersToFeet(meters : number, precision : number): number;

/**
 * Takes meters and converts them to inches with a given precision.
 * @param {number} meters
 * @param {number} precision
 * @return {number}
 * @param meters 
 * @param precision 
 * @return  
 */
declare function metersToInches(meters : number, precision : number): number;

/**
 * Takes a unit of length, a length in meters and converts meters to the given unit of length with the specified precision.
 * @param unit
 * @param value
 * @param precision
 * @return {number}
 * @param unit 
 * @param value 
 * @param precision 
 * @return  
 */
declare function meterConversion(unit : string, value : number, precision : number): number;

/**
 * Wavelength represents a wavelength for a given frequency
 * 
 * @example
 * let wavelength = new Wavelength('300');
 * const quarterWavelengthInInches = wavelength.toQuarterWavelength('in');
 * const quarterWavelengthInFeet = wavelength.toQuarterWavelength('f');
 * const quarterWavelengthInMeters = wavelength.toQuarterWavelength('m');
 * const quarterWavelengthInCentimeters = wavelength.toQuarterWavelength('cm');
 */
declare interface Wavelength {
		
	/**
	 * 
	 * @param frequencyInMegahertz 
	 * @param precision? 
	 * @return  
	 */
	new (frequencyInMegahertz : number, precision? : number): Wavelength;
		
	/**
	 * Returns the full wavelength of the given frequency in meters as a float to the specified decimal precision.
	 * @returns {number}
	 * @return  
	 */
	toFloat(): number;
		
	/**
	 * Sets the precision for the Wavelength object.
	 * @param {number} precision
	 * @param precision 
	 */
	setPrecision(precision : number): /* void */ any;
		
	/**
	 * Returns the full wavelength of the given frequency in centimeters as a float to the specified decimal precision.
	 * @returns {number}
	 * @return  
	 */
	toCentimeters(): number;
		
	/**
	 * Returns the full wavelength of the given frequency in feet as a float to the specified decimal precision.
	 * @returns {number}
	 * @return  
	 */
	toFeet(): number;
		
	/**
	 * Returns the full wavelength of the given frequency in inches as a float to the specified decimal precision.
	 * @returns {number}
	 * @return  
	 */
	toInches(): number;
		
	/**
	 * Returns 3/4 wavelength of the given frequency in the specified unit as a
	 * float to the specified decimal precision.
	 * @param {string} [unit = 'm'] - use either 'm' for meters, 'cm' for centimeters, 'f' for feet, or 'in' for inches
	 * @returns {number}
	 * @param unit? 
	 * @return  
	 */
	toThreeQuartersWavelength(unit? : string): number;
		
	/**
	 * Returns 5/8 wavelength of the given frequency in the specified unit as a
	 * float to the specified decimal precision.
	 * @param {string} [unit = 'm'] - use either 'm' for meters, 'cm' for centimeters, 'f' for feet, or 'in' for inches
	 * @returns {number}
	 * @param unit? 
	 * @return  
	 */
	toFiveEighthsWavelength(unit? : string): number;
		
	/**
	 * Returns 1/2 wavelength of the given frequency in the specified unit as a
	 * float to the specified decimal precision.
	 * @param {string} [unit = 'm'] - use either 'm' for meters, 'cm' for centimeters, 'f' for feet, or 'in' for inches
	 * @returns {number}
	 * @param unit? 
	 * @return  
	 */
	toHalfWavelength(unit? : string): number;
		
	/**
	 * Returns 1/4 wavelength of the given frequency in the specified unit as a
	 * float to the specified decimal precision.
	 * @param {string} [unit = 'm'] - use either 'm' for meters, 'cm' for centimeters, 'f' for feet, or 'in' for inches
	 * @returns {number}
	 * @param unit? 
	 * @return  
	 */
	toQuarterWavelength(unit? : string): number;
		
	/**
	 * @type {number}
	 */
	frequencyInMegahertz : number;
		
	/**
	 * @type {number}
	 */
	valueInMeters : number;
		
	/**
	 * @type {number}
	 */
	precision : number;
}

declare module 'js-electrical-engineering-equations'