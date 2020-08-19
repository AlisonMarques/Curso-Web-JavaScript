// axios = cliente http
const axios = require('axios');

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';

const chineses = (f) => f.pais === 'China';
const mulheres = (f) => f.genero === 'F';
const menorSalario = (func, funcAtual) => {
  return func.salario < funcAtual.salario ? func : funcAtual;
};

// puxando o arquivo json para a api
axios.get(url).then((response) => {
  const funcionarios = response.data;

  /**
   * filtrando quem sao chineses e do sexo feminino
   * encontrando quem possui o menor salário
   */
  const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario);

  console.log(func);
});
