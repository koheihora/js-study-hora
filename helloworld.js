var http = require('http');
var fs = require('fs');

var server = http.createServer();
server.on('request', doRequest);
server.listen(process.env.PORT, process.env.IP);
console.log('Server Running');

//リクエストの処理 今度はHTMLファイルを読み込んで表示させる
function doRequest(req, res){
  fs.readFile('./hello.html', 'UTF-8',
              function(err, data){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('data');
  res.end();
              });
}