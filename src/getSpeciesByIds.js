const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const specieId = data.species;
  const idsList = ids;
  return idsList.map((animals, index) => specieId.filter((id) => (id.id === ids[index]))[0]);
};
module.exports = getSpeciesByIds;
