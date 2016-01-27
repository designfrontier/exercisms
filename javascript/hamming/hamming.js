var compute = function (strandA, strandB) {
  if (strandA.length !== strandB.length) {
    throw new Error('DNA strands must be of equal length.');
  }

  if (strandA === strandB) {
    return 0;
  }

  return strandA.split('').reduce(function (prev, value, index) {
    return (value !== strandB[index]) ? prev + 1 : prev;
  }, 0);
};

module.exports = compute;
