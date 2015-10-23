var compute = function (stringA, stringB) {
  var a = stringA.split('') //convert strings to arrays
      , b = stringB.split('');

  if (a.length !== b.length) {
    throw new Error('DNA strands must be of equal length.');
  }

  return a.reduce(function (prev, value, index) {
    if (value !== b[index]) {
      prev.push(value);
    }

    return prev;
  }, []).length;
};

module.exports = compute;