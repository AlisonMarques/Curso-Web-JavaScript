/**
 * Uma factory retorna um novo objeto
 * Dessa forma toda instancia vai reiniciar o valor
 * valor independente
 */

module.exports = () => {
  return {
    valor: 1,
    inc() {
      this.valor++;
    },
  };
};
