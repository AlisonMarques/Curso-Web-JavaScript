const express = require('express');
const app = express();
const port = 3003;

const bancoDeDados = require('./bancoDeDados');
const bodyParser = require('body-parser');

/**
 * bodyparser.urlencoded vai transformar o corpo da requisição
 * em objetos para que o servidor possa acessar
 */
app.use(bodyParser.urlencoded({ extended: true }));

/**
 *  Criando a rota e o objeto com seus valores
 *  Retornando para a rota o objeto convertido para json
 *  Função middleware
 */

// listando produtos
app.get('/produtos', (req, res, next) => {
  res.send(bancoDeDados.getProdutos());
  // convertendo o objeto para json
});

// listando produtor a partir da ID
app.get('/produtos/:id', (req, res, next) => {
  res.send(bancoDeDados.getProduto(req.params.id));
});

/**
 * Criando um produto a partir do corpo da requisição
 * Salvando e retornando o produto como um JSON
 */
app.post('/produtos', (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco,
  });
  res.send(produto);
});

/**
 * Atualizando um produto a partir do ID dele
 * passando como parâmetro
 * e ai é só modificar o que quiser
 */
app.put('/produtos/:id', (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    id: req.params.id,
    nome: req.body.nome,
    preco: req.body.preco,
  });
  res.send(produto);
});

// Deletando um produto passando o ID como parâmetro
app.delete('/produtos/:id', (req, res, next) => {
  const produto = bancoDeDados.excluirProduto(req.params.id);
  res.send(produto);
});
// Informando a porta que a api irá ouvir
app.listen(port, () => {
  console.log(`Servidor execuntando na porta ${port}`);
});
