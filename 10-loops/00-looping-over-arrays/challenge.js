module.exports.sumNumbers = function(array) {
  var sum = 0;
  for (i = 0; i < array.length; i++) { sum += array[i] };
  return sum;
};

module.exports.splitAndLowerCaseString = function(inputString) {

  var result = inputString.toLowerCase();
  return result.split(",");

};

module.exports.addIndex = function(array) {
  var result = [];
  for (i=0; i < array.length; i++) {
    result.push( i + " is " + array[i]);
  }
  return result;
};
