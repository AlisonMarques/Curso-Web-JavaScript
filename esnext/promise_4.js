function gerarNumeroEntre(min, max, tempo) {
    if (min > max) {
        [max, min] = [min, max];
    }

    return new Promise((resolve) => {
        setTimeout(function () {
            const fator = max - min + 1;
            const aleatorio = parseInt(Math.random() * fator) + min;
            resolve(aleatorio);
        }, tempo);
    });
}

// chamando varias promises ao msm tempo

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumeroEntre(1, 60, 4000),
        gerarNumeroEntre(1, 60, 2000),
        gerarNumeroEntre(1, 60, 3000),
        gerarNumeroEntre(1, 60, 2500),
        gerarNumeroEntre(1, 60, 1000),
        gerarNumeroEntre(1, 60, 1500),
    ]);
}

gerarVariosNumeros().then((numeros) => console.log(numeros));
