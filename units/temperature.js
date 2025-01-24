function convert(value, from, to) {
  if (from === to) return value;

  if (from === "celsius" && to === "fahrenheit") {
    return (value * 9) / 5 + 32;
  }
  if (from === "fahrenheit" && to === "celsius") {
    return ((value - 32) * 5) / 9;
  }
  if (from === "celsius" && to === "kelvin") {
    return value + 273.15;
  }
  if (from === "kelvin" && to === "celsius") {
    return value - 273.15;
  }
  if (from === "fahrenheit" && to === "kelvin") {
    return ((value - 32) * 5) / 9 + 273.15;
  }
  if (from === "kelvin" && to === "fahrenheit") {
    return ((value - 273.15) * 9) / 5 + 32;
  }
  throw new Error(`Conversion from ${from} to ${to} is not supported`);
}

const units = { celsius: {}, fahrenheit: {}, kelvin: {} };

function supports(from, to) {
  const supportedUnits = ["celsius", "fahrenheit", "kelvin"];
  return supportedUnits.includes(from) && supportedUnits.includes(to);
}

function getPossibleConversions(from) {
  if (from === "celsius") {
    return ["fahrenheit", "kelvin"];
  }
  if (from === "fahrenheit") {
    return ["celsius", "kelvin"];
  }
  if (from === "kelvin") {
    return ["celsius", "fahrenheit"];
  }
  return [];
}

module.exports = { convert, supports, getPossibleConversions, units };
