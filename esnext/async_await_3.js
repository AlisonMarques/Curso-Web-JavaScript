// sorteio mega sena

function gerarNumeroEntre(min, max, numerosproibidos) {
    if (min > max) {
        [max, min] = [min, max];
    }

    return new Promise((resolve, reject) => {
        const fator = max - min + 1;
        const aleatorio = parseInt(Math.random() * fator) + min;
        if (numerosproibidos.includes(aleatorio)) {
            reject('Número repetido');
        } else {
            resolve(aleatorio);
        }
    });
}

async function gerarMegaSena(qtdeNumeros, tentativas = 1) {
    try {
        const numeros = [];

        for (let _ of Array(qtdeNumeros).fill()) {
            //await é sempre passado para a funçao que retorna uma promise
            numeros.push(await gerarNumeroEntre(1, 60, numeros));
        }
        return numeros;
    } catch (err) {
        /**
         * dentro do catch criamos um limite de tentativa para tentar gerar
         * os numeros da mega sena
         */
        if (tentativas > 10) {
            throw 'Número de tentativas esgotado!';
        } else {
            gerarMegaSena(qtdeNumeros, tentativas + 1);
        }
    }
}
gerarMegaSena(15).then(console.log).catch(console.log);
