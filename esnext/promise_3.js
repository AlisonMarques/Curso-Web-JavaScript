// fazendo sorteio com promise

function gerarNumeroEntre(min, max) {
    if (min > max) {
        [max, min] = [min, max];
    }

    return new Promise((resolve) => {
        const fator = max - min + 1;
        const aleatorio = parseInt(Math.random() * fator) + min;
        resolve(aleatorio);
        console.log(aleatorio);
    });
}

// o resultado do resolve para o (.then)

gerarNumeroEntre(1, 60)
    .then((num) => num * 10)
    .then((numX10) => `O número gerado foi ${numX10}`)
    .then(console.log);
