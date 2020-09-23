/**
 * Arrow function
 * Dessa forma já tem o return implícito
 */
const soma = (a, b) => a + b;
console.log(soma(2, 8));

/**
 * Arrow function (this)
 * Ambos irão apontar para exports quando se usar arrow function
 * */
const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({});
lexico1();
lexico2();

// Parametro default / Parametro Padrão
function log(texto = 'Node') {
  console.log(texto);
}

log();
log('Sou mais forte');

// operador rest (...)
function total(...numeros) {
  let total = 0;
  numeros.forEach((n) => (total += n));
  return total;
}

console.log(total(5, 10, 25, 40));
