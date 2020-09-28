// Template String
const produto = "Ipad";
console.log(`${produto} é caro!`);

// Destructuring
const [l, e, ...tras] = "Cod3r";
// (...tras) recebe todo o resto da string
console.log(l, e, tras);

// desestruturando array
const [x, , y] = [1, 2, 3];
console.log(x, y);

// desestruturando  um objeto
const { idade: i, nome: n } = { nome: "Alison", idade: 21 };
console.log(`Nome: ${n} \nIdade: ${i}`);
