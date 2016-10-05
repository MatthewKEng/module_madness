// 2 functions
var random = require('./random');
var convert = require('./convert');

var number = random(100, 1000000);


exports.money = function(){
  convert(number);
  return convert;
};

exports.accountBal = function(){
  return("Account balance:\n");
};



// place this randomNumber(100,1000000) in USD conversion function

//function that returns "Account balance:\n"
