// promise = promeça

/**
 * Se usa promises quando voce quer ter um tipo de
 * processamento assíncrono
 *
 * Uma promises tem 2 grandes destinos/caminhos:
 * 1 - ser resolvida, atendida, ou seja, promeça cumprida
 * 2 - ou rejeitada
 *
 */

// exemplo 1

function falarDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // o resolve só aceita apenas um parametro
      resolve(frase);
    }, segundos * 1000);
  });
}

falarDepoisDe(3, 'Que legal!')
  .then((frase) => frase.concat('?!?'))
  .then((outraFrase) => console.log(outraFrase))
  //tratar erro em uma promise
  .catch((e) => console.log(e));
