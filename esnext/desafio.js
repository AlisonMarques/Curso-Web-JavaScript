const fs = require('fs');

const path = require('path');

const caminho = path.join(__dirname, 'dados.txt');

function exibirConteudo(conteudo) {
    return new Promise((resolve) => {
        fs.readFile(caminho, function (_, conteudo) {
            resolve(conteudo.toString());
        });
    });
}

exibirConteudo(caminho).then((conteudo) => console.log(conteudo));

// quebrando o arquivo em linhas
exibirConteudo(caminho)
    .then((conteudo) => conteudo.split('\n'))
    .then((linhas) => console.log(linhas[1]));

// usando a função Join para separar por vírgula
exibirConteudo(caminho)
    .then((conteudo) => conteudo.split('\n'))
    .then((linhas) => linhas.join(','))
    .then((conteudo) => `O resultado final é: ${conteudo} `)
    .then(console.log);

// function exibirConteudo(_, conteudo) {
//     console.log(conteudo.toString());
// }

// const p = new Promise((resolve) => {
//     resolve(exibirConteudo());
// });

// p.then(fs.readFile(caminho)).then(exibirConteudo);
