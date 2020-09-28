// recurso novo

// percorre a partir das letras/valores
for (let letra of "Cod3r") {
    console.log(letra);
}

// percore a partir do índice
const assuntoEcma = ["Map", "Set", "Promise"];

// for in
for (let i in assuntoEcma) {
    console.log(i);
}

const assuntosMap = new Map([
    ["Map", { abordado: true }],
    ["Set", { abordado: true }],
    ["Promise", { abordado: false }],
]);

for (let assunto of assuntosMap) {
    console.log(assunto);
}

// percorrendo apenas as chaves
for (let chave of assuntosMap.keys()) {
    console.log(chave);
}

// percorrendo apenas os valores
for (let valor of assuntosMap.values()) {
    console.log(valor);
}

// desestruturando o array e pegando as entries/entradas
for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl);
}
