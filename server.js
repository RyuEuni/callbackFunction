import http from 'http';

console.dir(http);
const server = http.createServer(function(reqeust, response){

  //비즈니스 로직 부분
  let body = "";
  body += "<!DOCTYPE html>";
  body += "<html>";
  body += "<head>";
  body += "<title>Node.js</title>";
  body += "</head>";
  body += "<body>";
  body += "<h1>Hello World</h1>";
  body += "</body>";
  body += "</html>";

  response.statusCode = 200;
  response.setHeader('content-type', 'text/plain'); //text/plain은 설명, html은 문서, json은 객체
  response.end('Hello World');
});