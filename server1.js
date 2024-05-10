// 19/04 - criar o primeiro servidor web usando node
const http = require('http');

const server = http.createServer((req, res)=>{
    console.log("efetuano pedido!\n");
    //declarando um header
    res.setHeader('content-type', 'text/html');
    res.write("<h1>o que voce quer seu malandro?</h1>");
    res.write("<h2>dormir</h2>");
    res.write("<h3>cafezinho</h3>");
    res.end();
})

server.listen(3000, 'localhost', ()=>{
    console.log('servidor no ar!!!');
})