const data = require('../data/zoo_data');

const isManager = (id) => {
  const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
  const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
  const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
  const managers = [stephanieId, olaId, burlId];
  const verifyMenager = managers.some((manager) => manager === id);
  return verifyMenager;
};
const getRelatedEmployees = (managerId) => {
  if (isManager(managerId)) {
    const getEmployee = data.employees;
    const verifyEmployee = getEmployee.filter((employee) => employee.managers.includes(managerId));
    return verifyEmployee.map((element) => `${element.firstName} ${element.lastName}`);
  } throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};
// console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));
console.log(getRelatedEmployees('9e7d4524'));

module.exports = { isManager, getRelatedEmployees };
