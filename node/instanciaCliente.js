const contadorA = require('./instanciaUnica');
const contadorB = require('./instanciaUnica');

/**
 * Sempre que tiver () na frente, significará que esta
 * invocando uma função factory
 */
const contadorC = require('./instanciaNova')();
const contadorD = require('./instanciaNova')();

// instancia UNICA
// está guardando valor em cima de outra instancia
// fazendo cache
contadorA.inc();
contadorA.inc();
console.log('instancia Unica');
console.log(contadorA.valor, contadorB.valor);

// instancia NOVA
// nao está guardando valor em cima de outra instancia
contadorC.inc();
contadorC.inc();
console.log('instancia Nova');
console.log(contadorC.valor, contadorD.valor);
