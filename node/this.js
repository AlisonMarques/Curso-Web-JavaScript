// O THIS fora de uma função vai apontar para module.exports
console.log(this === global);
console.log(this === module);

console.log(this === module.exports);
console.log(module.exports === this);

console.log(this === exports);

function logThis() {
  /**
   * O THIS dentro de uma função vai apontar para GLOBAL
   */
  console.log('Dentro de uma função....');
  console.log(this === exports);
  //false
  console.log(this === module.exports);
  //false
  console.log(this === global);
  //true
  console.log(' Dentro de uma função o this aponta para global');
}

logThis();
