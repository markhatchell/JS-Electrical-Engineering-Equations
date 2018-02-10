import Battery from "./Battery";

describe('Battery', () => {

  test('should set precision', () => {
    let battery = new Battery();

    battery.setPrecision();
    expect(battery.precision).toEqual(4);

    battery.setPrecision(1);
    expect(battery.precision).toEqual(1);

  });


  test('if amp hours is 1.000 then coulombs should be 3600.000', () => {
    let battery = new Battery();
    battery.setBatteryCapacityInAmpHours(1);

    expect(battery.getBatteryCapacityInCoulombs()).toEqual(3600.000)
  });

  test('if coulombs is 3600.000 amp hours should be 1', () => {
    let battery = new Battery();
    battery.setBatteryCapacityInCoulombs(3600.000);

    expect(battery.getBatteryCapacityInAmpHours()).toEqual(1.000)
  });

  test('if amp hours is 4.800 then coulombs should be 17280.00', () => {
    let battery = new Battery();
    battery.setBatteryCapacityInAmpHours(4.800);

    expect(battery.getBatteryCapacityInCoulombs()).toEqual(17280.000)
  });

  test('if coulombs is 1548247.00 amp hours should be 430.069', () => {
    let battery = new Battery();
    battery.setBatteryCapacityInCoulombs(1548247);

    expect(battery.getBatteryCapacityInAmpHours()).toEqual(430.0686)
  });

  test('if amp hours is 1.000 and current draw is 1.000 amp then runtime should be 48min or .8 hours', () => {
    let battery = new Battery();
    battery.setBatteryCapacityInAmpHours(1);
    battery.setCurrentDraw(1);
    battery.calculateRuntime();

    expect(battery.getRunTimeInHours()).toEqual(.8);
    expect(battery.getRunTimeInMin()).toEqual(48);
  });

  test('if amp hours is 41.000 and current draw is 4.800 amp then runtime should be 410min or 6.833 hours', () => {
    let battery = new Battery();
    battery.setBatteryCapacityInAmpHours(41);
    battery.setCurrentDraw(4.8);
    battery.calculateRuntime();

    expect(battery.getRunTimeInHours()).toEqual(6.8333);
    expect(battery.getRunTimeInMin()).toEqual(410);
  });

});
