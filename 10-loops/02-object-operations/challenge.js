module.exports.copy = function(object) {
  var newObject = {};
  for (k in object) {
    newObject[k] = object[k];
  };
  return newObject;
};

module.exports.extend = function(dest, src) {
  for (k in src) {
    dest[k] = src[k];
  };
  return dest;
};

module.exports.hasElems = function(object, array) {
  var res = true;
  for (i = 0; i < array.length; i++) {
    res = res && array[i] in object;
  }
  return res;
};