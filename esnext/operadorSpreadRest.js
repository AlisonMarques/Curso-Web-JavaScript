// operado ... rest(juntar)/spread(espalhar)
// usar rest com parametro de função

// usar spread com objeto
const funcionario = { nome: "Alison", salario: 3.5 };
// aqui está sendo usado o spread para espalhar os atributos de funcionario
// para dentro do clone
const clone = { ativo: true, ...funcionario };
console.log(clone);

// usar spread com array
const grupoA = ["João", "Pedro", "Gloria"];
const grupoFinal = ["Maria", ...grupoA, "Rafaela"];
console.log(grupoFinal);
