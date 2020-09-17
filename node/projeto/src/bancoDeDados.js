// sequenciando o id, pra sempre acrescentar mais 1 a cada novo id e nao repetir
const sequence = {
  _id: 1,
  get id() {
    return this._id++;
  },
};

const produtos = {};

/**
 * Salvando produto
 * Setando o valor de id no produto, caso ele nao tenha
 */
function salvarProduto(produto) {
  if (!produto.id) produto.id = sequence.id;
  produtos[produto.id] = produto;
  return produto;
}

// função para pegar o id como parâmetro
function getProduto(id) {
  return produtos[id] || {};
}

// retornando apenas os valores de produtos
function getProdutos() {
  return Object.values(produtos);
}

module.exports = { salvarProduto, getProduto, getProdutos };
