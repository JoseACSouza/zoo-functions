const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const getAnimal = data.species.filter((animalName) => (animalName.name === animal))[0];
  return getAnimal.residents.every((yo) => yo.age >= age);
};
module.exports = getAnimalsOlderThan;
