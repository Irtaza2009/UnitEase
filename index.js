const length = require("./units/length");
const weight = require("./units/weight");
const temperature = require("./units/temperature");
const time = require("./units/time");

const UnitEase = {
  convert(value, fromUnit, toUnit) {
    if (length.supports(fromUnit, toUnit)) {
      return length.convert(value, fromUnit, toUnit);
    }
    if (weight.supports(fromUnit, toUnit)) {
      return weight.convert(value, fromUnit, toUnit);
    }
    if (temperature.supports(fromUnit, toUnit)) {
      return temperature.convert(value, fromUnit, toUnit);
    }
    if (time.supports(fromUnit, toUnit)) {
      return time.convert(value, fromUnit, toUnit);
    }
    throw new Error(`Unsupported conversion: ${fromUnit} to ${toUnit}`);
  },
  supports(fromUnit, toUnit) {
    return (
      length.supports(fromUnit, toUnit) ||
      weight.supports(fromUnit, toUnit) ||
      temperature.supports(fromUnit, toUnit) ||
      time.supports(fromUnit, toUnit)
    );
  },
};

module.exports = UnitEase;
