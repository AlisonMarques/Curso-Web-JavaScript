/**
 * Nas promises são passada funções que vai definir
 * quando a promise vai ser cumprida
 *
 * Quando a função passada dentro da promise for executada
 * aí sim a promise vai ser cumprida
 *
 * Normalmente o nome da função passada dentro da promise
 * se chama (resolve)
 *
 */
let p = new Promise(function (resolve) {
    /**
     * para chamar dois parâmetros, é necessário criar um objeto
     * ou um array dentro da função
     * O Segundo parametro de uma promise n vai ser chamado
     */
    resolve(["Ana", "Bia", "Carlos", "Daniel"]);
});

// forma mais minificada de escrever
//p.then((valor) => console.log(valor));

// forma mais extensa de se escrever
// p.then(function (valor) {
//     console.log(valor);
// });

// o resultado de um (.then) é passado para o próximo (.then)

// Promise usando variáveis
// Aqui pega o primeiro valor do array
p.then((valor) => valor[0])
    // variável (primeiro) está pegando o primeiro valor recebido de (valor) e depois pega apenas a primeira letra do valor passado
    .then((primeiro) => primeiro[0])
    // variável (letra) está pegando o primeiro valor recebido de (primeiro) e transformando em minuscula
    .then((letra) => letra.toLowerCase())
    // e por fim, (letraMinuscula) esta recebendo o valor de (letra) e imprimindo no console
    .then((letraMinuscula) => console.log(letraMinuscula));

// Promise usando funções
const primeiroElementoDoArray = (array) => array[0];

const primeiraLetra = (letra) => letra[0];

const letraMinuscula = (letra) => letra.toLowerCase();

p.then(primeiroElementoDoArray)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)
    .catch((e) => console.log(e));
