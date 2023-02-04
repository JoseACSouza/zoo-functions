const data = require('../data/zoo_data');

const verifyName = (name) => {
  const firstName = data.employees.find((employee) => employee.firstName === name);
  const lastName = data.employees.find((surName) => surName.lastName === name);
  if (firstName) {
    return firstName;
  } if (lastName) {
    return lastName;
  }
};

const employeeData = (returnName) => {
  const { id, firstName, lastName, responsibleFor } = returnName;
  return {
    id,
    fullName: `${firstName} ${lastName}`,
    species: responsibleFor,
    locations: '',
  };
};

const animalData = (employeeObject) => {
  const { species } = employeeObject;
  const getName = species.map((item) => data.species.find((specie) => specie.id === item).name);
  const getLocation = species
    .map((index) => data.species.find((specie) => specie.id === index).location);
  return {
    species: getName,
    locations: getLocation,
  };
};

const emptyParameter = () => data.employees.map((element) => {
  const employee = employeeData(element);
  const animal = animalData(employee);
  return { ...employee, ...animal };
});

const verifyId = (objectId) => data.employees.find((item) => objectId.id === item.id);

const getEmployeesCoverage = (object) => {
  if (object) {
    let returnName = '';
    if (object.name) {
      returnName = verifyName(object.name);
    } else if (verifyId(object) === undefined) {
      throw new Error('Informações inválidas');
    } else { returnName = verifyId(object); }
    const employeeObject = employeeData(returnName);
    const animalObject = animalData(employeeObject);
    return { ...employeeObject, ...animalObject };
  } return emptyParameter();
};
module.exports = getEmployeesCoverage;
