const http = require('http');

const getTurma = (letra) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;

    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            let resultado = '';

            // on = ouvir / ouvindo de data
            res.on('data', (dados) => {
                resultado += dados;
            });

            // end = fim
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado));
                } catch (e) {
                    reject(e);
                }
            });
        });
    });
};

// Recurso do ES8
// Objetivo de simplificar o uso de promises...

let obterALunos = async () => {
    const ta = await getTurma('A');
    const tb = await getTurma('B');
    const tc = await getTurma('C');
    return [].concat(ta, tb, tc);
}; // re torna um objeto Asyncfunction

// Aqui obtemos acesso aquilo que a Asyncfunction retornou
obterALunos()
    .then((alunos) => alunos.map((a) => a.nome))
    .then((nomes) => console.log(nomes));
