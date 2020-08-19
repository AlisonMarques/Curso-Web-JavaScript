const moduloA = require('../../moduloA');
console.log(moduloA.ola);

// usando modulo core que já vem no node

const http = require('http');
http
  .createServer((req, res) => {
    res.write('Boa tarde!');
    res.end();
  })
  .listen(8080);
