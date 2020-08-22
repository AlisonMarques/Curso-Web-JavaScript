const express = require('express');

const app = express();

const port = 3003;

/**
 *  Criando a rota e o objeto com seus valores
 *  Retornando para a rota o objeto convertido para json
 */
app.get('/produto', (req, res, next) => {
  res.send({ nome: 'Notebook', precos: 123.45 }); // convertendo o objeto para json
});

// Informando a porta que a api irá ouvir
app.listen(port, () => {
  console.log(`Servidor execuntando na porta ${port}`);
});
