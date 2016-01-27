var mapDNAtoRNA = {
    'C': 'G'
    , 'A': 'U'
    , 'T': 'A'
    , 'G': 'C'
  }

  , mapRNAtoDNA = {
    'G': 'C'
    , 'U': 'A'
    , 'A': 'T'
    , 'C': 'G'
  }

  , toRna = function (dnaString) {
    return dnaString.split('').map(function (item) {
      return mapDNAtoRNA[item];
    }).join('');
  }
  , toDna = function (rnaString) {
    return rnaString.split('').map(function (item) {
      return mapRNAtoDNA[item];
    }).join('');
  };

module.exports = function () {
  return {
    toRna: toRna
    , toDna: toDna
  };
};
