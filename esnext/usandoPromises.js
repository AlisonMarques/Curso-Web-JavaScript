// com promises

const http = require("http");
const { get } = require("lodash");

const getTurma = (letra) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;

    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            let resultado = "";

            // on = ouvir / ouvindo de data
            res.on("data", (dados) => {
                resultado += dados;
            });

            // end = fim
            res.on("end", () => {
                try {
                    resolve(JSON.parse(resultado));
                } catch (e) {
                    reject(e);
                }
            });
        });
    });
};

// let nomes = [];

// getTurma("A").then((alunos) => {
//     nomes = nomes.concat(alunos.map((a) => `A: ${a.nome}`));
//     getTurma("B").then((alunos) => {
//         nomes = nomes.concat(alunos.map((a) => `B: ${a.nome}`));
//         console.log(nomes);
//         getTurma("C").then((alunos) => {
//             nomes = nomes.concat(alunos.map((a) => `C: ${a.nome}`));
//             console.log(nomes);
//         });
//     });
// });

// aqui posso passar várias promises
Promise.all([getTurma("A"), getTurma("B"), getTurma("C")])
    // concatenando todos as turmas em um único array
    .then((turmas) => [].concat(...turmas))
    // pegando os nomes dos alunos
    .then((alunos) => alunos.map((aluno) => aluno.nome))
    .then((nomes) => console.log(nomes));

// testando o erro
getTurma("D").catch((e) => console.log(e.message));
