// não aceita repetição/não indexada
const times = new Set();
times.add("Vasco");
// ou
times.add("Sao paulo").add("Palmeiras").add("Corinthians");

//testando repetição// só vai pegar o primeiro
times.add("Vasco");

console.log(times);

console.log(times.has("vasco"));
console.log(times.has("Vasco"));
times.delete("Palmeiras");

const nomes = ["Alison", "Davi", "Leia", "Jeff"];
const nomesSet = new Set(nomes);
console.log(nomesSet);
