console.log(module.exports === this);
//ambos sao verdadeiros
console.log(module.exports === exports);

/**
 * todos os objetos apontam para o module.exports
 * module.exports é um objeto vazio
 */

this.a = 1;
exports.b = 2;
module.exports.c = 3;

exports = null;
console.log(module.exports);

exports = {
  nome: 'teste',
};

console.log(module.exports);

// jeito certo de se exportar algo
module.exports = { name: 'alison', age: 21, city: 'Gyn' };
