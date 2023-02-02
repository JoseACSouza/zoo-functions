const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (!animal) {
    const newObject = {};
    data.species.forEach((specie) => {
      const { name, residents } = specie;
      newObject[name] = residents.length;
    });
    return newObject;
  }
  const { species, sex } = animal;
  if (sex) {
    const getAnimal = data.species.find((specie) => specie.name === species);
    return getAnimal.residents.filter((resident) => resident.sex === sex).length;
  }
  const getAnimal = data.species.find((specie) => specie.name === species);
  return getAnimal.residents.length;
};
module.exports = countAnimals;
