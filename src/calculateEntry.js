const data = require('../data/zoo_data');

const countEntrants = (entrants = 0) => {
  if (JSON.stringify(entrants) === '{}') {
    return 0;
  }
  const result = {};
  const yo = entrants.map((client) => {
    const { age } = client;
    return age;
  });
  const numberOfChilds = yo.filter((nChild) => nChild < 18).length;
  const numberOfAdults = yo.filter((nAdult) => nAdult >= 18 && nAdult < 50).length;
  const numberOfSeniors = yo.filter((nSenior) => nSenior >= 50).length;
  if (numberOfChilds) {
    result.child = numberOfChilds;
  } if (numberOfAdults) {
    result.adult = numberOfAdults;
  } if (numberOfSeniors) {
    result.senior = numberOfSeniors;
  } return result;
};

const calculateEntry = (entrants) => {
  if (!entrants) {
    return 0;
  }
  const { child = 0, adult = 0, senior = 0 } = countEntrants(entrants);
  return child * data.prices.child + adult * data.prices.adult + senior * data.prices.senior;
};
module.exports = { calculateEntry, countEntrants };
