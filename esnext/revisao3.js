// ES8: Object.values = Pega apenas os valores dos objetos
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj));

// ES8: Object.entries = vai pegar a chave e valor dentro de arrays
// criando uma matriz
console.log(Object.entries(obj));

// Melhorias na notação literal
// novo jeito de criar função dentro de um objeto
const nome = 'Alison';
const pessoa = {
  nome,
  ola() {
    return 'Opa!';
  },
};
console.log(pessoa.nome + ',' + pessoa.ola());

// Class

class Animal {}
class Cachorro extends Animal {
  falar() {
    return 'Au Au!';
  }
}

console.log(new Cachorro().falar());
