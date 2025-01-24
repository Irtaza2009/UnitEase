const conversions = {
  milligrams: {
    grams: 0.001,
    kilograms: 1e-6,
    ounces: 3.5274e-5,
    pounds: 2.20462e-6,
  },
  kilograms: { pounds: 2.20462, grams: 1000, ounces: 35.274, milligrams: 1e6 },
  pounds: {
    kilograms: 0.453592,
    grams: 453.592,
    ounces: 16,
    milligrams: 453592,
  },
  grams: {
    kilograms: 0.001,
    pounds: 0.00220462,
    ounces: 0.035274,
    milligrams: 1000,
  },
  ounces: {
    kilograms: 0.0283495,
    pounds: 0.0625,
    grams: 28.3495,
    milligrams: 28349.5,
  },
};

const units = conversions;

function convert(value, from, to) {
  if (from === to) {
    return value;
  }
  if (!conversions[from] || !conversions[from][to]) {
    throw new Error(`Conversion from ${from} to ${to} is not supported`);
  }
  return value * conversions[from][to];
}

function supports(from, to) {
  return !!(conversions[from] && conversions[from][to]);
}

function getPossibleConversions(from) {
  if (!conversions[from]) {
    return [];
  }
  return Object.keys(conversions[from]);
}

module.exports = { convert, supports, getPossibleConversions, units };
