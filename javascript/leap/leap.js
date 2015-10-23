var isLeapYear = function (yearIn) {
  return (yearIn % 4 === 0) && ((yearIn % 100 !== 0) || (yearIn % 400 === 0));
};

module.exports = isLeapYear;