// Aprendendo a como usar a função erro da promise
// Usamos a função 'reject()'

function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if (Math.random() < chanceErro) {
            reject('Ocorreu um erro!');
        } else {
            resolve(valor);
        }
    });
}

funcionarOuNao('Testando...', 0.8)
    .then((v) => console.log(`Valor: ${v}`))
    // tratando o erro que é gerado com o 'catch()'
    // é recomendado usar o catch sempre como o último
    .catch((err) => console.log(`Erro: ${err}`));
