// tagged templates - processa o template dentro de uma função
// a ordem de leitura sempre alterna de parte e depois valores
function tag(partes, ...valores) {
  console.log(partes);
  console.log(valores);
  return 'Outra string';
}

const aluno = 'Gui';
const situacao = 'Aprovado';
console.log(tag`${aluno} está ${situacao}.`);
