const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const findEmployee = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const findAnimal = data.species.find((specie) => specie.id === findEmployee);
  const sortAnimal = findAnimal.residents.sort((a, b) => b.age - a.age);
  const { name, sex, age } = sortAnimal[0];
  return [name, sex, age];
};
module.exports = getOldestFromFirstSpecies;
