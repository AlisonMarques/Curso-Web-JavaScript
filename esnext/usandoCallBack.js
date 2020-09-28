// sem promises
// utilizando callback
// O segundo parâmetro é sempre a callback
const http = require("http");

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
    http.get(url, (res) => {
        let resultado = "";

        // on = ouvir / ouvindo de data
        res.on("data", (dados) => {
            resultado += dados;
        });

        // end = fim
        res.on("end", () => {
            callback(JSON.parse(resultado));
        });
    });
};

let nomes = [];

// alunos é o callback
// callback dentro da outra nao é bem vista e dificulta a leitura e possiveis correção
getTurma("A", (alunos) => {
    nomes = nomes.concat(alunos.map((a) => `A: ${a.nome}`));
    getTurma("B", (alunos) => {
        nomes = nomes.concat(alunos.map((a) => `B: ${a.nome}`));
        console.log(nomes);
        getTurma("C", (alunos) => {
            nomes = nomes.concat(alunos.map((a) => `C: ${a.nome}`));
            console.log(nomes);
        });
    });
});
