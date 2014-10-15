module.exports.newArray = function(item1, item2, item3, item4) {

  var myArray = [item1, item2, item3, item4];
  return myArray;

};

module.exports.firstAndLast = function(array) {

  var resultArray = [array[0], array[array.length-1]];
  return resultArray;
  
};