import http from 'http';
import fileMake from './makeFileFunc.js';
import qs from 'querystring';
import html from './htmlObj.js';


const server = http.createServer(function(req, res){
  

  if(req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(html.bodyTag(html.formPost));
    res.end();
  }
  if(req.url.startsWith('/make')){
    //console.log(req.body);
    req.on('data', function(chunk){
      //console.log(chunk.toString());
      const postValue = qs.parse(chunk.toString());
      //console.log(postValue);
      const obj = Object.values(postValue);
      
      res.writeHead(200, {'Content-Type': 'text/html'});
      fileMake(obj[0], obj[1]);
      res.end(html.bodyTag(html.result));
    });

  }
})

server.listen(3000, function(error) {
  if(error) { console.error('서버 안돌아감') } else { console.log('서버 돌아감'); }
  });