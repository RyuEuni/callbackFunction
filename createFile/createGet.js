import http from 'http';
import fileMake from './makeFileFunc.js';
import funcObj from './htmlObj.js';

const server = http.createServer(function(req, res){
  if(req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(funcObj.bodyTag(funcObj.formGet));
    res.end();
  }
  if(req.url.startsWith('/make')){    
    const urlValue = req.url.split('=')
    console.dir(urlValue);

    const exp = urlValue[2];
    const fileName = urlValue[1].split('&')[0];
    console.dir(exp);
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    fileMake(fileName, exp);
    res.write(funcObj.bodyTag(funcObj.MakeResult));
    res.write(funcObj.bodyTag(funcObj.rmFileGo));
    res.end();
  }
  if(req.url.startsWith('/delete')){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(funcObj.bodyTag(funcObj.formGetDel));
    res.end();
  }
  if(req.url.startsWith('/deleteOK')){
    const urlValue = req.url.split('=')
    console.dir(urlValue);

    //const exp = urlValue[2];
    //const fileName = urlValue[1].split('&')[0];
    //console.dir(exp);
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    //fileMake(fileName, exp);
    res.write(funcObj.bodyTag(funcObj.removeResult));
    res.end();
  }
})

server.listen(3000, function(error) {
  if(error) { console.error('서버 안돌아감') } else { console.log('서버 돌아감'); }
  });