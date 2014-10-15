module.exports.addItem = function(item, list) {
  if( list.indexOf(item) < 0) {
    list.push(item);
  };
  
  return list;
};

module.exports.reverseSortedList = function(list) {
  list.sort();
  list.reverse();
  return(list);
};