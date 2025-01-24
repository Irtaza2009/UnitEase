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

// Alias
UnitEase.addAlias("kilograms", "kg");
console.log(UnitEase.convert(5, "kg", "pounds")); // 11.0231

// Custom conversion
UnitEase.addConversion("lightyears", "parsecs", 0.306601);
console.log(UnitEase.convert(2, "lightyears", "parsecs")); // 0.613202
console.log(UnitEase.convert(2, "parsecs", "lightyears")); // 6.5137

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

try {
  UnitEase.convert(10, "metres", "kilometers");
} catch (error) {
  console.error(error.message); // Unsupported conversion: metres to kilometers. Did you mean "meters" instead of "metres"?
}
