const UnitEase = require("./index");

// Example conversions

// Length
console.log(UnitEase.convert(10, "meters", "feet")); // 32.8084

// Weight
console.log(UnitEase.convert(5, "kilograms", "pounds")); // 11.0231

// Temperature
console.log(UnitEase.convert(0, "celsius", "fahrenheit")); // 32

// Time
console.log(UnitEase.convert(3600, "seconds", "hours")); // 1

// Check if conversion is supported
console.log(UnitEase.supports("meters", "feet")); // true
console.log(UnitEase.supports("celsius", "fahrenheit")); // true
console.log(UnitEase.supports("celsius", "pounds")); // false
console.log(UnitEase.supports("meters", "pounds")); // false

// Get possible conversions
console.log(UnitEase.getPossibleConversions("meters")); // [ 'feet', 'inches', 'yards', 'miles', 'kilometers', 'centimeters', 'millimeters' ]
console.log(UnitEase.getPossibleConversions("celsius")); // [ 'fahrenheit', 'kelvin' ]
console.log(UnitEase.getPossibleConversions("lightyears")); // []

// Error handling
try {
  UnitEase.convert(10, "meters", "pounds");
} catch (error) {
  console.error(error.message); // Unsupported conversion: meters to pounds
}
