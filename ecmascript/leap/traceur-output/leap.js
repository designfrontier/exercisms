"use strict";
$traceurRuntime.options.symbols = true;
var $__default = function(yearIn) {
  return (yearIn % 4 === 0) && ((yearIn % 100 !== 0) || (yearIn % 400 === 0));
};
;
Object.defineProperties(module.exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
