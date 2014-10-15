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
  
  // store the parameters into global variables 
  var myItem = item;
  var myMoney = money;

  // create an inventoryItem object constructor
  function inventoryItem(description, price) {
    this.description = description;
    this.price = price;
  };

  // initialize our inventory list
  var inventoryList = [
      new inventoryItem('MacBook Air', 999),
      new inventoryItem('MacBook Pro', 1299),
      new inventoryItem('Mac Pro', 2499),
      new inventoryItem('Apple Sticker', 1) 
  ];

  // now check to see if we have the item, and if they can afford it
  var result = inventoryList.filter( function(obj) {
    return obj.description == myItem && obj.price <= myMoney;
  });

  return result.length > 0;

};