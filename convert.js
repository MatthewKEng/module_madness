//function to convert to USD

convert = function(num){
  num.toLocaleString('en-us', {currency:'USD', style: 'currency'})
};

module.exports = convert;
