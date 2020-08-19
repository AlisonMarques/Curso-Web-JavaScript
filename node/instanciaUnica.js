/**
 *  node faz cache
 *  dessa forma toda instancia vai ter o mesmo valor
 *  nao irá reiniciar o contador
 */

module.exports = {
  valor: 1,
  inc() {
    this.valor++;
  },
};
