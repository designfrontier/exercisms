const compute = (stringA, stringB) => {
  const a = stringA.split('') //convert strings to arrays
      , b = stringB.split('');

  return a.reduce((value, index) => {
    return value === b[index];
  }, []);
};

export function () {
  return { compute: compute };
};