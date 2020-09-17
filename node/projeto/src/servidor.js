const express = require('express');

const app = express();

const port = 3003;
const bancoDeDados = require('./bancoDeDados');

/**
 *  Criando a rota e o objeto com seus valores
 *  Retornando para a rota o objeto convertido para json
 *  Função middleware
 */
app.get('/produtos', (req, res, next) => {
  res.send(bancoDeDados.getProdutos());
  // convertendo o objeto para json
});

app.get('/produtos/:id', (req, res, next) => {
  res.send(bancoDeDados.getProduto(req.params.id));
});

/**
 * Criando um produto a partir do corpo da requisição
 * Salvando e retornando o produto como um JSON
 */
app.post('/produtos', (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.name,
    preco: req.body.preco,
  });
  res.send(produto);
});

// Informando a porta que a api irá ouvir
app.listen(port, () => {
  console.log(`Servidor execuntando na porta ${port}`);
});
