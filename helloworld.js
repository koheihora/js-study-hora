var http = require('http');
var fs = require('fs');

var server = http.createServer();
server.on('request', doRequest);
server.listen(process.env.PORT, process.env.IP);
console.log('Server Running');

//リクエストの処理 今度はHTMLファイルを読み込んで表示させる
//さらに、ランダムでタイトルと表示の一部を変える
function doRequest(req, res){
  var number = Math.floor(Math.random() * 3);
  fs.readFile('./hello.html', 'UTF-8',
              function(err, data){
                var title = ["ページA","ページB","ページC"];
                var content = ["This is Sample version","Here is one more content","This is last one"];
                var data2 = data.
                replace(/@title@/g, title[number]).
                replace(/@content@/g, content[number]);
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(data2);
  res.end();
              });
}