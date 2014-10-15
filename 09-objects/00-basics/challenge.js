module.exports.createCourse = function(courseTitle, courseDuration, courseStudents) {
  var course = {
    title: courseTitle,
    duration: courseDuration,
    students: courseStudents
  };
  return course;
};

module.exports.addProperty = function(object, newProp, newValue) {
  if (!(newProp in object)) {
    object[newProp] = newValue;
  };
  return object;
};

module.exports.formLetter = function(letter) {
  return "Hello " + letter.recipient + ",\n\n" + letter.msg + "\n\n" + "Sincerely,\n" + letter.sender;
};

module.exports.canIGet  = function(item, money) {

  // create an inventoryItem object constructor
  var priceList = {};

  // initialize our inventory list
  priceList['MacBook Air'] = 999;
  priceList['MacBook Pro'] = 1299;
  priceList['Mac Pro'] = 2499;
  priceList['Apple Sticker'] = 1;

  return money >= priceList[item];

};