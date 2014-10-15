module.exports.favoriteNumber = function(number, guess) {
  if (guess == number) {
    return("You got it!");
  } 
  else if (guess > number) {
    return("Too high");
  }
  else {
    return("Too low");
  };
};

module.exports.checkLock = function(num1, num2, num3, num4) {
 var res = (num1 == 3 || num1 == 5 || num1 == 7) &&
           (num2 == 2) &&
           (5 <= num3 && num3 <= 100) &&
           (num4 < 9 || num4 > 20);

  if (res) {
    return "correct";
  }
  else {
    return "incorrect";
  };
};

module.exports.canIGet = function(item, money) {

  var cost;
  // determine cost of item they want
  switch(item) {
    case 'MacBook Air':
      cost = 999;
      break;
    case 'MacBook Pro':
      cost = 1299;
      break;
    case 'Mac Pro':
      cost = 2499;
      break;
    case 'Apple Sticker':
      cost = 1;
      break;
    // if item is not in list, set cost to be greater than amount of money they have
    default:
      cost = money + 1;
  };
  return cost <= money;
};