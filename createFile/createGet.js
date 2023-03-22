import http from 'http';
import fileFunc from './FileFunc.js';
import htmlObj from './htmlObj.js';

const server = http.createServer(function(req, res){
  if(req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(htmlObj.bodyTag(htmlObj.formGet));
    res.end();
  }
  if(req.url.startsWith('/make')){    
    const urlValue = req.url.split('=')
    console.dir(urlValue);

    const exp = urlValue[2];
    const fileName = urlValue[1].split('&')[0];
    console.dir(exp);
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    fileFunc.makeFile(fileName, exp);
    res.write(htmlObj.bodyTag(htmlObj.MakeResult));
    res.write(htmlObj.bodyTag(htmlObj.rmFileGo));
    res.end();
  }
  if(req.url.startsWith('/delete')){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(htmlObj.bodyTag(htmlObj.formGetDel));
    res.end();
  }
  if(req.url.startsWith('/deleteOK')){
    const deleteValue = req.url.split('=')[1]
    console.dir(deleteValue);
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    fileFunc.removeFile(deleteValue)
    //res.write();
    res.end(htmlObj.bodyTag(htmlObj.removeResult));
  }
})

server.listen(3000, function(error) {
  if(error) { console.error('서버 안돌아감') } else { console.log('서버 돌아감'); }
  });