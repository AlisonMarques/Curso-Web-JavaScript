const fs = require('fs');

const produto = {
  nome: 'Celular',
  preco: 1249.99,
  desconto: 0.15,
};

/**
 * Escrevendo arquivos.
 * Criando arquivo json e convertendo um objeto para dentro dele
 * e também persistindo ele na memória
 */
fs.writeFile(
  __dirname + '/arquivoGerado.json',
  JSON.stringify(produto),
  (err) => {
    console.log(err || 'Arquivo salvo');
  }
);
