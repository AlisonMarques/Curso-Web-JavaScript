/**
 * (...nomes) aqui vai criar um array podendo conter varios nomes
 * funçao irá fazer um map pelos nomes e retornando saudaçoes
 * com cada nome
 */

module.exports = function (...nomes) {
  return nomes.map((nome) => `Boa semana ${nome}!`);
};
