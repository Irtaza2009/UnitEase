const length = require("./units/length");
const weight = require("./units/weight");
const temperature = require("./units/temperature");
const time = require("./units/time");

const customConversions = {}; // For custom conversion definitions
const unitAliases = {}; // For unit aliases

const UnitEase = {
  convert(value, fromUnit, toUnit) {
    fromUnit = this.resolveAlias(fromUnit);
    toUnit = this.resolveAlias(toUnit);

    if (fromUnit === toUnit) {
      return value;
    }
    if (customConversions[fromUnit] && customConversions[fromUnit][toUnit]) {
      return value * customConversions[fromUnit][toUnit];
    }
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

    const suggestions = this.suggestUnit(fromUnit);
    const message = suggestions
      ? `Unsupported conversion: ${fromUnit} to ${toUnit}. Did you mean "${suggestions}" instead of "${fromUnit}"?`
      : `Unsupported conversion: ${fromUnit} to ${toUnit}.`;
    throw new Error(message);
  },

  supports(fromUnit, toUnit) {
    fromUnit = this.resolveAlias(fromUnit);
    toUnit = this.resolveAlias(toUnit);

    if (customConversions[fromUnit] && customConversions[fromUnit][toUnit]) {
      return true;
    }

    return (
      length.supports(fromUnit, toUnit) ||
      weight.supports(fromUnit, toUnit) ||
      temperature.supports(fromUnit, toUnit) ||
      time.supports(fromUnit, toUnit)
    );
  },

  getPossibleConversions(fromUnit) {
    fromUnit = this.resolveAlias(fromUnit);

    const possibleConversions = [];
    const unitsModules = [length, weight, temperature, time];

    if (customConversions[fromUnit]) {
      possibleConversions.push(...Object.keys(customConversions[fromUnit]));
    }

    for (const module of unitsModules) {
      const conversions = module.getPossibleConversions(fromUnit);
      possibleConversions.push(...conversions);
    }
    return possibleConversions;
  },

  addConversion(fromUnit, toUnit, factor) {
    fromUnit = this.resolveAlias(fromUnit);
    toUnit = this.resolveAlias(toUnit);

    if (!customConversions[fromUnit]) {
      customConversions[fromUnit] = {};
    }
    customConversions[fromUnit][toUnit] = factor;
    if (!customConversions[toUnit]) {
      customConversions[toUnit] = {};
    }
    customConversions[toUnit][fromUnit] = 1 / factor;
  },

  addAlias(unit, alias) {
    unitAliases[alias] = unit;
  },

  resolveAlias(unit) {
    return unitAliases[unit] || unit;
  },

  suggestUnit(inputUnit) {
    const allUnits = [
      ...Object.keys(length.units),
      ...Object.keys(weight.units),
      ...Object.keys(temperature.units),
      ...Object.keys(time.units),
      ...Object.keys(customConversions),
      ...Object.keys(unitAliases),
    ];

    const closestMatch = allUnits.find((unit) =>
      unit.toLowerCase().startsWith(inputUnit.toLowerCase())
    );

    return closestMatch || null;
  },
};

module.exports = UnitEase;
