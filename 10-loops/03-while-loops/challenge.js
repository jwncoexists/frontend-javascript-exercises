module.exports.stream = function(conditionalFn, actionFn) {
  while (conditionalFn()) {
    actionFn();
  }
};

module.exports.sumNumbers = function(numArray) {
  var i = 0;
  var sum = 0;
  while (i < numArray.length) {
    sum += numArray[i];
    i++;
  };
  return sum;
};

