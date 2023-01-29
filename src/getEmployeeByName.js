const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) {
    return {};
  } const getEmp = data.employees;
  // n = name;
  return getEmp.filter((n) => n.firstName === employeeName || n.lastName === employeeName)[0];
};
module.exports = getEmployeeByName;
