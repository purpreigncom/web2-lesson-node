const http = require('http');

const port = 5000;

const server = http.createServer((req, res)=>{
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
});

server.listen(port, err =>{
   if(err) console.log(err);
   console.log('Server started on port 5000');
});