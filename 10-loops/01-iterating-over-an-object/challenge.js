module.exports.getKeys = function(object) {
  var keys = [];
  for (k in object) {
    keys.push(k);
  }
  return keys;
};

module.exports.getValues = function(object) {
  var vals = [];
  for (key in object) {
    vals.push(object[key]);
  }
  return vals;
};

module.exports.objectToArray = function(object) {
  var res = [];
  for (key in object) {
    res.push(key + " is " + object[key] );
  }
  return res;
};