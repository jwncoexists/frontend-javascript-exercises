module.exports.reversePlusOne = function(array) {
  var resArray = array.reverse();
  resArray.unshift(1);
  return resArray;
};

module.exports.plusesEverywhere = function(array) {
  var resArray = array.join("+");
  return resArray;
};

module.exports.arrayQuantityPlusOne = function(array) {
  return array.length + 1;
}