const conversions = {
  seconds: {
    minutes: 1 / 60,
    hours: 1 / 3600,
    days: 1 / 86400,
    weeks: 1 / 604800,
    years: 1 / 31536000,
  },
  minutes: {
    seconds: 60,
    hours: 1 / 60,
    days: 1 / 1440,
    weeks: 1 / 10080,
    years: 1 / 525600,
  },
  hours: {
    seconds: 3600,
    minutes: 60,
    days: 1 / 24,
    weeks: 1 / 168,
    years: 1 / 8760,
  },
  days: {
    seconds: 86400,
    minutes: 1440,
    hours: 24,
    weeks: 1 / 7,
    years: 1 / 365,
  },
  weeks: {
    seconds: 604800,
    minutes: 10080,
    hours: 168,
    days: 7,
    years: 1 / 52,
  },
  years: {
    seconds: 31536000,
    minutes: 525600,
    hours: 8760,
    days: 365,
    weeks: 52,
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
