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

  , toRNA = function (dnaString) {

    dnaString.split('').map(function (item) {
      return mapDNAtoRNA[item];
    });
  }
  , toDNA = function (rnaString) {
    rnaString.split('').map(function (item) {
      return mapRNAtoDNA[item];
    });
  };

module.exports = function () {
  return {
    toRNA: toRNA
    , toDNA: toDNA
  };
};