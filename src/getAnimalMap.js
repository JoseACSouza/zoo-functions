const data = require('../data/zoo_data');

const createObject = () => {
  const object = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  }; return object;
};

const parameterVoid = (object) => {
  data.species.forEach((specie) => {
    if (specie.location === 'NE') {
      object.NE.push(specie.name);
    } else if (specie.location === 'NW') {
      object.NW.push(specie.name);
    } else if (specie.location === 'SE') {
      object.SE.push(specie.name);
    } else if (specie.location === 'SW') {
      object.SW.push(specie.name);
    }
  });
};
const getResidents = (object) => {
  const key = Object.keys(object);
  const newObject = object;
  for (let index = 0; index < key.length; index += 1) {
    newObject[key[index]] = object[key[index]].map((item) => {
      const objectItem = data.species.find((animal) => animal.name === item).residents
        .map((resident) => resident.name);
      return { [item]: objectItem };
    });
  }
};

const selectSexAnimal = (object, sex) => {
  if (sex === 'male' || sex === 'female') {
    const key = Object.keys(object);
    const newObject = object;
    for (let index = 0; index < key.length; index += 1) {
      newObject[key[index]] = object[key[index]].map((item) => {
        const animalKey = Object.keys(item)[0];
        const objectItem = data.species.find((animal) => animal.name === animalKey).residents
          .filter((residentSex) => residentSex.sex === sex)
          .map((resident) => resident.name);
        return { [animalKey]: objectItem };
      });
    }
  } return object;
};

const sortElements = (object, sorted) => {
  if (sorted) {
    const key = Object.keys(object);
    const newObject = object;
    for (let index = 0; index < key.length; index += 1) {
      newObject[key[index]] = object[key[index]].map((item) => {
        const animalKey = Object.keys(item)[0];
        const objectItem = item[animalKey].sort();
        return { [animalKey]: objectItem };
      });
    }
  } return object;
};

const getAnimalMap = (options) => {
  const object = createObject();
  parameterVoid(object);
  if (options) {
    const { includeNames, sex, sorted } = options;
    if (includeNames) {
      getResidents(object);
      selectSexAnimal(object, sex);
      sortElements(object, sorted);
    }
  } return object;
};
module.exports = getAnimalMap;
