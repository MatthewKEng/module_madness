var http = require('http');
var random = require('./account');

http.createServer(function (req, res) {
  res.writeHead(200);

  //place last part here
  res.write(random.accountBal());
  res.write(random.money());
  res.end();


}).listen(3000);
