module.exports.formLetter = function(firstName, senderName, message) {
  var txt = "Hello " + firstName + ",\n\n" + message + "\n\n" + "Sincerely,\n" + senderName;
  return(txt);
};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
  var txt = bigString.substring(startA, endA) + bigString.substring(startB, endB);
  return (txt);
};

module.exports.findFirstMatch = function(text, searchString) {
  return (text.indexOf(searchString));
};

module.exports.findLastMatch = function(text, searchString) {
  return (text.lastIndexOf(searchString));
};

module.exports.substringBetweenMatches = function(text, searchString) {
  rtrnTxt = text.substring(text.indexOf(searchString)+searchString.length, text.lastIndexOf(searchString));
  return(rtrnTxt);
};