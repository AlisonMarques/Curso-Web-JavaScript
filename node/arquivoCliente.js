// módulo file system, nativo do node
const fs = require('fs');

const caminho = __dirname + '/arquivo.json';

// leitura sincrono...
/**
 * não é recomendando usar sincrono quando o arquivo é pesado
 * pois irá pesar o event loop, trazendo uma má performance
 */
const conteudo = fs.readFileSync(caminho, 'utf-8');
console.log(conteudo);

// leitura assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
  const config = JSON.parse(conteudo);
  console.log(`${config.db.host}:${config.db.port}`);
});

// aqui é necessário dizer a extensão do arquivo (.json)
const config = require('./arquivo.json');
console.log(config.db);

// lendo um diretório
fs.readdir(__dirname, (err, arquivos) => {
  console.log('Conteúdo da pasta...');
  console.log(arquivos);
});
