// usando async await em promises

/**
 * Sempre que quisermos fazer uma função ou promise ser
 * sincrona, que no caso, seria fazer o código resolver
 * uma função para depois passar para a outra.
 *
 * Quando não se usar o async/await o programa vai rodar
 * tudo de uma vez, sem respeitar se a função foi resolvida ou nao
 * isso fará que o código tenha erros, pois n vai receber
 * os dados que deveriam
 *
 * Async/Await é sempre usado quando tiver uma promise envolvida
 */
function esperarPor(tempo) {
    return new Promise(function (resolve) {
        setTimeout(() => resolve(), tempo);
    });
}

function retornarValor() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(10), 5000);
    });
}

// SEM ASYNC/AWAIT
// function executar() {
//     esperarPor(1500);
//     console.log('Sem async/await 1...');

//     esperarPor(1500);
//     console.log('Sem async/await 2...');

//     esperarPor(1500);
//     console.log('Sem async/await 3...');
// }

// executar();

// COM ASYNC/AWAIT
async function executar() {
    let valor = await retornarValor();

    await esperarPor(1500);
    console.log(`Com async/await ${valor} `);

    await esperarPor(1500);
    console.log(`Com async/await ${valor + 1} `);

    await esperarPor(1500);
    console.log(`Com async/await ${valor + 2}`);

    return valor + 3;
}

// para ter acesso ao valor do return, é necessário fazer um then
// sempre que quiser pegar algum valor, vai precisar usar o then
executar().then(console.log);
