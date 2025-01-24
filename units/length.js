const conversions = {
  meters: {
    feet: 3.28084,
    inches: 39.3701,
    yards: 1.09361,
    miles: 0.000621371,
    kilometers: 0.001,
    centimeters: 100,
    millimeters: 1000,
  },
  feet: {
    meters: 0.3048,
    inches: 12,
    yards: 0.333333,
    miles: 0.000189394,
    kilometers: 0.0003048,
    centimeters: 30.48,
    millimeters: 304.8,
  },
  inches: {
    meters: 0.0254,
    feet: 0.0833333,
    yards: 0.0277778,
    miles: 1.5783e-5,
    kilometers: 2.54e-5,
    centimeters: 2.54,
    millimeters: 25.4,
  },
  yards: {
    meters: 0.9144,
    feet: 3,
    inches: 36,
    miles: 0.000568182,
    kilometers: 0.0009144,
    centimeters: 91.44,
    millimeters: 914.4,
  },
  miles: {
    meters: 1609.34,
    feet: 5280,
    inches: 63360,
    yards: 1760,
    kilometers: 1.60934,
    centimeters: 160934,
    millimeters: 1609340,
  },
  kilometers: {
    meters: 1000,
    feet: 3280.84,
    inches: 39370.1,
    yards: 1093.61,
    miles: 0.621371,
    centimeters: 100000,
    millimeters: 1000000,
  },
  centimeters: {
    meters: 0.01,
    feet: 0.0328084,
    inches: 0.393701,
    yards: 0.0109361,
    miles: 6.2137e-6,
    kilometers: 1e-5,
    millimeters: 10,
  },
  millimeters: {
    meters: 0.001,
    feet: 0.00328084,
    inches: 0.0393701,
    yards: 0.00109361,
    miles: 6.2137e-7,
    kilometers: 1e-6,
    centimeters: 0.1,
  },
};

function convert(value, from, to) {
  if (!conversions[from] || !conversions[from][to]) {
    throw new Error(`Conversion from ${from} to ${to} is not supported`);
  }
  return value * conversions[from][to];
}

function supports(from, to) {
  return !!(conversions[from] && conversions[from][to]);
}

module.exports = { convert, supports };
