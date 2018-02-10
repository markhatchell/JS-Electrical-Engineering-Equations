import { getFloat, meterConversion, metersToCentimeters, metersToFeet, metersToInches } from "./utils";

describe('utils', () => {

  test('getFloat should work', () => {
    expect(getFloat(4.9898989898, 2)).toBe(4.99);
    expect(getFloat(4.9898989898, 4)).toBe(4.9899);
    expect(getFloat()).toBe(0);
  });


  test('metersToCentimeters should work', () => {
    expect(metersToCentimeters(1)).toBe(100);
    expect(metersToCentimeters(1.2, 2)).toBe(120);
  });


  test('metersToFeet should work', () => {
    expect(metersToFeet(1)).toBe(3.2808);
    expect(metersToFeet(2, 4)).toBe(6.5617);
  });


  test('metersToInches should work', () => {
    expect(metersToInches(1)).toBe(39.3701);
    expect(metersToInches(2, 4)).toBe(78.7402);
  });


  test('metersConversion should work', () => {
    expect(meterConversion('m', 1, 2)).toBe(1);
    expect(meterConversion('f', 1, 2)).toBe(3.28);
    expect(meterConversion('in', 1, 2)).toBe(39.37);
    expect(meterConversion('cm', 1, 2)).toBe(100);
  });


});
