const data = require('../data/zoo_data');

const week = {
  Tuesday: {
    officeHour: '',
    exhibition: [] },
  Wednesday: {
    officeHour: '',
    exhibition: [] },
  Thursday: {
    officeHour: '',
    exhibition: [] },
  Friday: {
    officeHour: '',
    exhibition: [] },
  Saturday: {
    officeHour: '',
    exhibition: [] },
  Sunday: {
    officeHour: '',
    exhibition: [] },
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!' },
};
const getScheduleName = (scheduleTarget) => data.species
  .find((specie) => specie.name === scheduleTarget).availability;

const verifySomedays = (day, specie) => {
  if (day === 'Tuesday') {
    week.Tuesday.exhibition.push(specie.name);
  } else if (day === 'Wednesday') {
    week.Wednesday.exhibition.push(specie.name);
  } else if (day === 'Thursday') {
    week.Thursday.exhibition.push(specie.name);
  } else if (day === 'Friday') {
    week.Friday.exhibition.push(specie.name);
  }
};

const exhibition = () => {
  data.species.forEach((specie) => specie.availability.forEach((day) => {
    verifySomedays(day, specie);
    if (day === 'Saturday') {
      week.Saturday.exhibition.push(specie.name);
    } else if (day === 'Sunday') {
      week.Sunday.exhibition.push(specie.name);
    }
  }));
};

const verifyIsName = (scheduleTarget) => data.species
  .some((targetName) => targetName.name === scheduleTarget);

const getScheduleEmpty = () => {
  const { Tuesday, Wednesday, Thursday, Saturday, Sunday, Friday } = week;
  Tuesday.officeHour = 'Open from 8am until 6pm';
  Wednesday.officeHour = 'Open from 8am until 6pm';
  Thursday.officeHour = 'Open from 10am until 8pm';
  Friday.officeHour = 'Open from 10am until 8pm';
  Saturday.officeHour = 'Open from 8am until 10pm';
  Sunday.officeHour = 'Open from 8am until 8pm';
  exhibition();
};
const getSchedule = (scheduleTarget) => {
  if (scheduleTarget) {
    if (week[scheduleTarget]) {
      getScheduleEmpty();
      return { [scheduleTarget]: week[scheduleTarget] };
    }
    if (verifyIsName(scheduleTarget)) {
      return getScheduleName(scheduleTarget);
    } getScheduleEmpty();
    return week;
  } getScheduleEmpty();
  return week;
};

module.exports = getSchedule;
