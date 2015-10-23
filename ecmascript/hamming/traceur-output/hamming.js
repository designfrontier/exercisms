"use strict";
$traceurRuntime.options.symbols = true;
var compute = $traceurRuntime.initTailRecursiveFunction(function(stringA, stringB) {
  return $traceurRuntime.call(function(stringA, stringB) {
    var a = stringA.split(''),
        b = stringB.split('');
    return $traceurRuntime.continuation(a.reduce, a, [function(value, index) {
      return value === b[$traceurRuntime.toProperty(index)];
    }, []]);
  }, this, arguments);
});
Object.defineProperties(module.exports, {
  compute: {get: function() {
      return compute;
    }},
  __esModule: {value: true}
});
